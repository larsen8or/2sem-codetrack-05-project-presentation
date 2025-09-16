/**
 * Modern Image Gallery Widget
 *
 * A reusable JavaScript class that creates an interactive image gallery
 * with thumbnails and a main display area. Perfect for showcasing
 * project portfolios or image collections.
 *
 * Features:
 * - Click thumbnails to view different images
 * - Smooth fade transitions between images
 * - Multi-paragraph HTML descriptions
 * - Fully responsive design
 * - Multiple galleries on one page
 */

class ImageGallery {
    /**
     * Creates a new image gallery instance
     *
     * @param {HTMLElement} containerElement - The DOM element that contains the gallery HTML structure
     * @param {Array} images - Array of image objects with src, title, and description properties
     *
     * Example usage:
     * const gallery = new ImageGallery(document.getElementById('my-gallery'), myImages);
     */
    constructor(containerElement, images) {
        // Validate that we have a valid container element
        if (!containerElement) {
            throw new Error('ImageGallery requires a container element');
        }

        // Validate that we have valid image data
        if (!images || !Array.isArray(images) || images.length < 2) {
            throw new Error('ImageGallery requires an array of at least 2 images');
        }

        // Store the container and images for this gallery instance
        this.container = containerElement;
        this.images = images;

        // Keep track of which image is currently displayed (starts at first image)
        this.currentImageIndex = 0;

        // Find all the required elements within this specific gallery container
        this.mainImage = this.container.querySelector('.main-image');
        this.mainTitle = this.container.querySelector('.main-title');
        this.mainDescription = this.container.querySelector('.main-description');
        this.thumbnailsContainer = this.container.querySelector('.thumbnails');

        // Make sure all required elements exist in the HTML
        if (!this.mainImage || !this.mainTitle || !this.mainDescription || !this.thumbnailsContainer) {
            throw new Error('ImageGallery container must contain required elements: .main-image, .main-title, .main-description, .thumbnails');
        }

        // Initialize the gallery after everything is validated
        this.init();
    }
    
    /**
     * Initialize the gallery by setting up thumbnails, displaying first image, and adding event listeners
     * This method is called automatically when creating a new gallery instance
     */
    init() {
        this.createThumbnails();
        this.showImage(0);
        this.setupClickHandlers();
    }

    /**
     * Create all thumbnail images and add them to the thumbnails container
     * Each thumbnail will be clickable to select that image
     */
    createThumbnails() {
        // Clear any existing thumbnails first
        this.thumbnailsContainer.innerHTML = '';
        
        // Create a thumbnail for each image in our collection
        this.images.forEach((imageData, index) => {
            const thumbnailElement = this.buildThumbnail(imageData, index);
            this.thumbnailsContainer.appendChild(thumbnailElement);
        });
    }
    
    /**
     * Build a single thumbnail element with image and accessibility attributes
     *
     * @param {Object} imageData - Object containing src, title, and description for the image
     * @param {number} index - The position of this image in the images array
     * @returns {HTMLElement} The completed thumbnail element
     */
    buildThumbnail(imageData, index) {
        // Create the container for this thumbnail
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';

        // Store the image index so we know which image to show when clicked
        thumbnail.setAttribute('data-index', index);

        // Add accessibility attributes for screen readers and keyboard navigation
        thumbnail.setAttribute('tabindex', '0');
        thumbnail.setAttribute('role', 'button');
        thumbnail.setAttribute('aria-label', `View ${imageData.title}`);

        // Create the actual image element
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = imageData.title;
        img.loading = 'lazy'; // Improve page performance by loading images only when needed

        // Add the image to the thumbnail container
        thumbnail.appendChild(img);

        return thumbnail;
    }
    
    /**
     * Display a specific image in the main gallery area with a smooth fade effect
     *
     * @param {number} index - Which image to show (position in the images array)
     */
    showImage(index) {
        // Make sure the index is valid (not negative or beyond our image count)
        if (index < 0 || index >= this.images.length) {
            return; // Exit early if invalid index
        }

        // Get the image data we want to display
        const imageToShow = this.images[index];

        // Update our current image tracker
        this.currentImageIndex = index;
        
        // Start fade out effect by making image semi-transparent
        this.mainImage.style.opacity = '0.5';
        
        // After a short delay, update the content and fade back in
        setTimeout(() => {
            // Update the main image
            this.mainImage.src = imageToShow.src;
            this.mainImage.alt = imageToShow.title;

            // Update the text content
            this.mainTitle.textContent = imageToShow.title;
            this.mainDescription.innerHTML = imageToShow.description; // Use innerHTML to support HTML paragraphs

            // Complete the fade in effect
            this.mainImage.style.opacity = '1';
        }, 150); // 150ms delay creates smooth transition effect

        // Update which thumbnail appears active
        this.updateThumbnailStyles();
    }
    
    /**
     * Update the visual appearance of thumbnails to show which one is currently active
     * The active thumbnail gets special styling to indicate it's the current image
     */
    updateThumbnailStyles() {
        // Get all thumbnail elements in this gallery
        const allThumbnails = this.thumbnailsContainer.querySelectorAll('.thumbnail');

        // Loop through each thumbnail to update its appearance
        allThumbnails.forEach((thumbnail, index) => {
            if (index === this.currentImageIndex) {
                // This is the active thumbnail - add active styling
                thumbnail.classList.add('active');
                thumbnail.setAttribute('aria-selected', 'true');
            } else {
                // This is not the active thumbnail - remove active styling
                thumbnail.classList.remove('active');
                thumbnail.setAttribute('aria-selected', 'false');
            }
        });
    }
    
    /**
     * Set up event listeners for thumbnail clicks
     * This enables users to click on thumbnails to view different images
     */
    setupClickHandlers() {
        // Add a single click listener to the thumbnails container (event delegation)
        // This is more efficient than adding individual listeners to each thumbnail
        this.thumbnailsContainer.addEventListener('click', (event) => {
            // Find the clicked thumbnail (event.target might be the img inside the thumbnail)
            const clickedThumbnail = event.target.closest('.thumbnail');

            // If a thumbnail was clicked, show that image
            if (clickedThumbnail) {
                const imageIndex = parseInt(clickedThumbnail.getAttribute('data-index'));
                this.showImage(imageIndex);
            }
        });
    }
    
    /**
     * Navigate to a different image with automatic wrapping
     * (This method is included for potential future features like arrow buttons)
     *
     * @param {number} targetIndex - Which image to navigate to
     */
    navigateToImage(targetIndex) {
        // Handle wrapping: if we go past the last image, go to first image
        if (targetIndex >= this.images.length) {
            targetIndex = 0;
        }
        
        // Handle wrapping: if we go before the first image, go to last image
        if (targetIndex < 0) {
            targetIndex = this.images.length - 1;
        }

        // Show the target image
        this.showImage(targetIndex);

        // Focus the corresponding thumbnail for accessibility
        const targetThumbnail = this.thumbnailsContainer.querySelector(`[data-index="${targetIndex}"]`);
        if (targetThumbnail) {
            targetThumbnail.focus();
        }
    }

    /**
     * Validate that an image object has all required properties
     * (Helper method for data validation)
     *
     * @param {Object} imageData - The image object to validate
     * @returns {boolean} True if the image data is valid, false otherwise
     */
    isValidImageData(imageData) {
        return imageData &&
               typeof imageData.src === 'string' && 
               typeof imageData.title === 'string' && 
               typeof imageData.description === 'string';
    }
}

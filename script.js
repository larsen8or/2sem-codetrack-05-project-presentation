/**
 * Modern Image Gallery Widget
 * Maintainable JavaScript implementation with large image display and thumbnails
 */

class ImageGallery {
    constructor(containerElement, images) {
        if (!containerElement) {
            throw new Error('ImageGallery requires a container element');
        }

        if (!images || !Array.isArray(images) || images.length < 2) {
            throw new Error('ImageGallery requires an array of at least 2 images');
        }

        this.container = containerElement;
        this.images = images;

        this.currentImageIndex = 0;

        // Find elements within this specific container
        this.mainImage = this.container.querySelector('.main-image');
        this.mainTitle = this.container.querySelector('.main-title');
        this.mainDescription = this.container.querySelector('.main-description');
        this.thumbnailsContainer = this.container.querySelector('.thumbnails');

        if (!this.mainImage || !this.mainTitle || !this.mainDescription || !this.thumbnailsContainer) {
            throw new Error('ImageGallery container must contain required elements: .main-image, .main-title, .main-description, .thumbnails');
        }

        this.init();
    }
    
    /**
     * Initialize the gallery
     */
    init() {
        this.renderThumbnails();
        this.displayImage(0);
        this.setupEventListeners();
    }

    /**
     * Render the thumbnail navigation
     */
    renderThumbnails() {
        this.thumbnailsContainer.innerHTML = '';
        
        this.images.forEach((image, index) => {
            const thumbnail = this.createThumbnail(image, index);
            this.thumbnailsContainer.appendChild(thumbnail);
        });
    }
    
    /**
     * Create a single thumbnail element
     * @param {Object} image - Image data object
     * @param {number} index - Image index
     * @returns {HTMLElement} Thumbnail element
     */
    createThumbnail(image, index) {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.setAttribute('data-index', index);
        thumbnail.setAttribute('tabindex', '0');
        thumbnail.setAttribute('role', 'button');
        thumbnail.setAttribute('aria-label', `View ${image.title}`);
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = 'lazy';
        
        thumbnail.appendChild(img);
        return thumbnail;
    }
    
    /**
     * Display a specific image in the main view
     * @param {number} index - Index of image to display
     */
    displayImage(index) {
        if (index < 0 || index >= this.images.length) return;
        
        const image = this.images[index];
        this.currentImageIndex = index;
        
        // Update main image with fade transition
        this.mainImage.style.opacity = '0.5';
        
        setTimeout(() => {
            this.mainImage.src = image.src;
            this.mainImage.alt = image.title;
            this.mainTitle.textContent = image.title;
            this.mainDescription.innerHTML = image.description;
            this.mainImage.style.opacity = '1';
        }, 150);
        
        // Update thumbnail active states
        this.updateThumbnailStates();
    }
    
    /**
     * Update active states of thumbnails
     */
    updateThumbnailStates() {
        const thumbnails = this.thumbnailsContainer.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            if (index === this.currentImageIndex) {
                thumbnail.classList.add('active');
                thumbnail.setAttribute('aria-selected', 'true');
            } else {
                thumbnail.classList.remove('active');
                thumbnail.setAttribute('aria-selected', 'false');
            }
        });
    }
    
    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Thumbnail clicks - scoped to this gallery instance
        this.thumbnailsContainer.addEventListener('click', (e) => {
            const thumbnail = e.target.closest('.thumbnail');
            if (thumbnail) {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                this.displayImage(index);
            }
        });
    }
    
    /**
     * Navigate to a specific image with wrap-around
     * @param {number} index - Target image index
     */
    navigateToImage(index) {
        if (index >= this.images.length) {
            index = 0; // Wrap to first image
        } else if (index < 0) {
            index = this.images.length - 1; // Wrap to last image
        }
        
        this.displayImage(index);
        
        // Focus the corresponding thumbnail within this gallery
        const thumbnail = this.thumbnailsContainer.querySelector(`[data-index="${index}"]`);
        if (thumbnail) {
            thumbnail.focus();
        }
    }

    /**
     * Validate image data structure
     * @param {Object} imageData - Image data to validate
     * @returns {boolean} True if valid
     */
    validateImageData(imageData) {
        return imageData && 
               typeof imageData.src === 'string' && 
               typeof imageData.title === 'string' && 
               typeof imageData.description === 'string';
    }
}

/**
 * Modern Image Gallery Widget
 * Maintainable JavaScript implementation with large image display and thumbnails
 */

class ImageGallery {
    constructor() {
        // Image data array - easily maintainable and expandable
        this.images = [
            {
                src: 'images/01-homepage-1024.png',
                title: 'Homepage Design',
                description: '<p>A modern and clean homepage layout showcasing professional web design principles with intuitive navigation and engaging visual elements. Features a responsive design approach with carefully crafted typography, strategic use of whitespace, and a cohesive color palette that creates a welcoming first impression.</p><p>The layout incorporates contemporary UI patterns including hero sections, call-to-action buttons, and optimized content hierarchy that guides users seamlessly through the site experience.</p>'
            },
            {
                src: 'images/02-projects-1024.png',
                title: 'Projects Overview',
                description: '<p>A comprehensive projects gallery displaying various development works, featuring responsive grid layouts and interactive project cards with hover effects and smooth transitions. Each project card includes thumbnail previews, concise descriptions, and technology stack indicators.</p><p>The design provides visitors with a clear understanding of the scope and technical complexity of each work, while the layout adapts fluidly across different screen sizes maintaining visual consistency and optimal readability.</p>'
            },
            {
                src: 'images/03-project-1024.png',
                title: 'Project Details',
                description: '<p>Detailed project showcase page highlighting technical specifications, development process, and key features of individual projects with comprehensive documentation and visual examples. Includes code snippets, architecture diagrams, and performance metrics showcasing the technical depth of each implementation.</p><p>The page structure facilitates easy navigation between different aspects of the project while providing in-depth technical insights for fellow developers and potential collaborators interested in the implementation details and challenges overcome.</p>'
            },
            {
                src: 'images/04-contact-1024.png',
                title: 'Contact Page',
                description: '<p>Professional contact interface with interactive forms, social media links, and clear communication channels for client engagement and professional networking opportunities. Features comprehensive form validation, accessibility considerations, and multiple contact methods including email, social platforms, and professional networks.</p><p>The design emphasizes trust and professionalism while maintaining user-friendly interaction patterns and providing clear feedback for form submissions and inquiries, ensuring seamless communication flow.</p>'
            },
            {
                src: 'images/05-widget-1024.png',
                title: 'Widget Component',
                description: '<p>Interactive widget demonstration showcasing dynamic functionality, user interface components, and responsive design elements with real-time data updates and smooth animations. Demonstrates advanced JavaScript capabilities, API integrations, and modern frontend frameworks working together.</p><p>The component includes comprehensive error handling, loading states, and accessibility features that ensure robust performance across different browsers and devices, providing engaging user experiences regardless of platform.</p>'
            },
            {
                src: 'images/06-gallery-1024.png',
                title: 'Gallery View',
                description: '<p>Image gallery interface displaying the current gallery widget in action with thumbnail navigation, main image display area, and interactive controls for seamless browsing experience. Features keyboard navigation support, touch gestures for mobile devices, and lazy loading for optimal performance.</p><p>The implementation demonstrates best practices in web accessibility, performance optimization, and responsive design patterns suitable for showcasing visual content across various contexts and device types.</p>'
            }
        ];
        
        this.currentImageIndex = 0;
        this.mainImage = document.getElementById('main-image');
        this.mainTitle = document.getElementById('main-title');
        this.mainDescription = document.getElementById('main-description');
        this.thumbnailsContainer = document.getElementById('thumbnails');
        
        this.init();
    }
    
    /**
     * Initialize the gallery
     */
    init() {
        this.validateImages();
        this.renderThumbnails();
        this.displayImage(0);
        this.setupEventListeners();
    }
    
    /**
     * Validate that we have at least 2 images as required
     */
    validateImages() {
        if (this.images.length < 2) {
            console.error('Gallery requires at least 2 images');
            return false;
        }
        return true;
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
        // Thumbnail clicks
        this.thumbnailsContainer.addEventListener('click', (e) => {
            const thumbnail = e.target.closest('.thumbnail');
            if (thumbnail) {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                this.displayImage(index);
            }
        });
        
        // Keyboard navigation for thumbnails
        this.thumbnailsContainer.addEventListener('keydown', (e) => {
            const thumbnail = e.target.closest('.thumbnail');
            if (thumbnail) {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                
                switch (e.key) {
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        this.displayImage(index);
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.navigateToImage(index + 1);
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.navigateToImage(index - 1);
                        break;
                }
            }
        });
        
        // Global keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowRight':
                    this.navigateToImage(this.currentImageIndex + 1);
                    break;
                case 'ArrowLeft':
                    this.navigateToImage(this.currentImageIndex - 1);
                    break;
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
        
        // Focus the corresponding thumbnail
        const thumbnail = this.thumbnailsContainer.querySelector(`[data-index="${index}"]`);
        if (thumbnail) {
            thumbnail.focus();
        }
    }
    
    /**
     * Add new image to gallery (for future extensibility)
     * @param {Object} imageData - New image data
     */
    addImage(imageData) {
        if (this.validateImageData(imageData)) {
            this.images.push(imageData);
            this.renderThumbnails();
            this.displayImage(this.currentImageIndex);
        }
    }
    
    /**
     * Remove image from gallery (for future extensibility)
     * @param {number} index - Index of image to remove
     */
    removeImage(index) {
        if (index >= 0 && index < this.images.length && this.images.length > 2) {
            this.images.splice(index, 1);
            
            // Adjust current index if necessary
            if (this.currentImageIndex >= this.images.length) {
                this.currentImageIndex = this.images.length - 1;
            } else if (this.currentImageIndex > index) {
                this.currentImageIndex--;
            }
            
            this.renderThumbnails();
            this.displayImage(this.currentImageIndex);
        } else {
            console.warn('Cannot remove image: Gallery must maintain at least 2 images');
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

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});

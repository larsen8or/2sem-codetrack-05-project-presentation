/**
 * Modern Image Gallery Widget
 * Maintainable JavaScript implementation with large image display and thumbnails
 */

class ImageGallery {
    constructor() {
        // Image data array - easily maintainable and expandable
        this.images = [
            {
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Im1vdW50YWluIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5NTAwO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmNTcyMjtzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI21vdW50YWluKSIvPjxwb2x5Z29uIHBvaW50cz0iMCwyMDAgNjAsMTAwIDEyMCwxNDAgMjAwLDgwIDMwMCwxMjAgNDAwLDE2MCA0MDAsMzAwIDAsMzAwIiBmaWxsPSIjNTM0YjMxIiBvcGFjaXR5PSIwLjgiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjRweCIgZm9udC1mYW1pbHk9IkFyaWFsIj5Nb3VudGFpbnM8L3RleHQ+PC9zdmc+',
                title: 'Mountain Landscape',
                description: 'A breathtaking view of snow-capped mountains during golden hour, showcasing nature\'s magnificent beauty and the peaceful serenity of alpine landscapes.'
            },
            {
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImZvcmVzdCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJkNTAxNjtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM1NGExNWY7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmb3Jlc3QpIi8+PGNpcmNsZSBjeD0iODAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjMzY4ODNhIiBvcGFjaXR5PSIwLjgiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSI4MCIgcj0iNTAiIGZpbGw9IiMzNjg4M2EiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjEyMCIgcj0iNDUiIGZpbGw9IiMzNjg4M2EiIG9wYWNpdHk9IjAuOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNHB4IiBmb250LWZhbWlseT0iQXJpYWwiPkZvcmVzdDwvdGV4dD48L3N2Zz4=',
                title: 'Forest Path',
                description: 'A mystical forest path winding through ancient trees, inviting adventurers to explore the hidden secrets and natural wonders that lie ahead.'
            },
            {
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Im9jZWFuIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5NGZmO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAyNjJhMztzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI29jZWFuKSIvPjxwYXRoIGQ9Ik0wLDIwMCBRMTAwLDE4MCAyMDAsMjAwIFQzMDAsMjAwIFQ0MDAsMjIwIEw0MDAsMzAwIEwwLDMwMCBaIiBmaWxsPSIjOTFkNWZmIiBvcGFjaXR5PSIwLjciLz48cGF0aCBkPSJNMCwyMjAgUTEwMCwyMDAgMjAwLDIyMCBUMzAwLDIyMCBUNDAwLDI0MCBMNDAWM0gwMEwwLDMwMCBaIiBmaWxsPSIjNjRiNWY2IiBvcGFjaXR5PSIwLjUiLz48dGV4dCB4PSI1MCUiIHk9IjQwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjRweCIgZm9udC1mYW1pbHk9IkFyaWFsIj5PY2VhbjwvdGV4dD48L3N2Zz4=',
                title: 'Ocean Waves',
                description: 'Crystal clear turquoise waters meeting pristine sandy shores, capturing the eternal dance between land and sea in perfect harmony.'
            },
            {
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9Im5pZ2h0IiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZTIxNDc7c3RvcC1vcGFjaXR5OjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDgwYzI1O3N0b3Atb3BhY2l0eToxIiAvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbmlnaHQpIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI0MCIgcj0iMiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIxMjAiIGN5PSI2MCIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjUwIiByPSIyLjUiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iNzAiIHI9IjEiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMzUwIiBjeT0iNDAiIHI9IjEuNSIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIxNDAiIGN5PSIxMDAiIHI9IjEiIGZpbGw9IndoaXRlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjI0cHgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+U3RhcnM8L3RleHQ+PC9zdmc+',
                title: 'Starry Night Sky',
                description: 'A magnificent display of countless stars illuminating the night sky above a silhouetted landscape, reminding us of our place in the vast universe.'
            },
            {
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImRlc2VydCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmYzEwNztzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlZDZjMDI7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkZXNlcnQpIi8+PGVsbGlwc2UgY3g9IjEwMCIgY3k9IjE4MCIgcng9IjgwIiByeT0iNDAiIGZpbGw9IiNkMTQ2MDgiIG9wYWNpdHk9IjAuOCIvPjxlbGxpcHNlIGN4PSIyNDAiIGN5PSIxNjAiIHJ4PSIxMDAiIHJ5PSI1MCIgZmlsbD0iI2QxNDYwOCIgb3BhY2l0eT0iMC43Ii8+PGVsbGlwc2UgY3g9IjM0MCIgY3k9IjIwMCIgcng9IjYwIiByeT0iMzAiIGZpbGw9IiNkMTQ2MDgiIG9wYWNpdHk9IjAuNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNHB4IiBmb250LWZhbWlseT0iQXJpYWwiPkRlc2VydDwvdGV4dD48L3N2Zz4=',
                title: 'Desert Sunset',
                description: 'Golden sand dunes stretching endlessly under a vibrant sunset sky, showcasing the raw beauty and timeless elegance of desert landscapes.'
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
            this.mainDescription.textContent = image.description;
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
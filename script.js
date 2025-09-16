/**
 * Modern Image Gallery
 * Maintainable JavaScript implementation with image array management
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
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Im9jZWFuIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5NGZmO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAyNjJhMztzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI29jZWFuKSIvPjxwYXRoIGQ9Ik0wLDIwMCBRMTAwLDE4MCAyMDAsMjAwIFQzMDAsMjAwIFQ0MDAsMjIwIEw0MDAsMzAwIEwwLDMwMCBaIiBmaWxsPSIjOTFkNWZmIiBvcGFjaXR5PSIwLjciLz48cGF0aCBkPSJNMCwyMjAgUTEwMCwyMDAgMjAwLDIyMCBUMzAwLDIyMCBUNDAwLDI0MCBMNDAWM0hwMEwwLDMwMCBaIiBmaWxsPSIjNjRiNWY2IiBvcGFjaXR5PSIwLjUiLz48dGV4dCB4PSI1MCUiIHk9IjQwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjRweCIgZm9udC1mYW1pbHk9IkFyaWFsIj5PY2VhbjwvdGV4dD48L3N2Zz4=',
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
        this.galleryContainer = document.getElementById('gallery');
        this.modal = document.getElementById('modal');
        this.modalImage = document.getElementById('modal-image');
        this.modalCaption = document.getElementById('modal-caption');
        
        this.init();
    }
    
    /**
     * Initialize the gallery
     */
    init() {
        this.validateImages();
        this.renderGallery();
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
     * Render the gallery items
     */
    renderGallery() {
        this.galleryContainer.innerHTML = '';
        
        this.images.forEach((image, index) => {
            const galleryItem = this.createGalleryItem(image, index);
            this.galleryContainer.appendChild(galleryItem);
            
            // Add loading animation with stagger effect
            setTimeout(() => {
                galleryItem.classList.add('loading');
            }, index * 100);
        });
    }
    
    /**
     * Create a single gallery item element
     * @param {Object} image - Image data object
     * @param {number} index - Image index
     * @returns {HTMLElement} Gallery item element
     */
    createGalleryItem(image, index) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-index', index);
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View ${image.title} in full size`);
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-item-content">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        return item;
    }
    
    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Gallery item clicks
        this.galleryContainer.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const index = parseInt(galleryItem.getAttribute('data-index'));
                this.openModal(index);
            }
        });
        
        // Keyboard navigation for gallery items
        this.galleryContainer.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const galleryItem = e.target.closest('.gallery-item');
                if (galleryItem) {
                    e.preventDefault();
                    const index = parseInt(galleryItem.getAttribute('data-index'));
                    this.openModal(index);
                }
            }
        });
        
        // Modal close button
        document.querySelector('.close').addEventListener('click', () => {
            this.closeModal();
        });
        
        // Modal navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.navigateModal(-1);
        });
        
        document.getElementById('next-btn').addEventListener('click', () => {
            this.navigateModal(1);
        });
        
        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (this.modal.style.display === 'block') {
                switch (e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.navigateModal(-1);
                        break;
                    case 'ArrowRight':
                        this.navigateModal(1);
                        break;
                }
            }
        });
        
        // Close modal when clicking outside image
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }
    
    /**
     * Open modal with specific image
     * @param {number} index - Image index to display
     */
    openModal(index) {
        this.currentImageIndex = index;
        const image = this.images[index];
        
        this.modalImage.src = image.src;
        this.modalImage.alt = image.title;
        this.modalCaption.innerHTML = `<strong>${image.title}</strong><br>${image.description}`;
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus management for accessibility
        this.modal.focus();
    }
    
    /**
     * Close the modal
     */
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    /**
     * Navigate to next/previous image in modal
     * @param {number} direction - 1 for next, -1 for previous
     */
    navigateModal(direction) {
        this.currentImageIndex += direction;
        
        // Wrap around navigation
        if (this.currentImageIndex >= this.images.length) {
            this.currentImageIndex = 0;
        } else if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.images.length - 1;
        }
        
        const image = this.images[this.currentImageIndex];
        this.modalImage.src = image.src;
        this.modalImage.alt = image.title;
        this.modalCaption.innerHTML = `<strong>${image.title}</strong><br>${image.description}`;
    }
    
    /**
     * Add new image to gallery (for future extensibility)
     * @param {Object} imageData - New image data
     */
    addImage(imageData) {
        if (this.validateImageData(imageData)) {
            this.images.push(imageData);
            this.renderGallery();
        }
    }
    
    /**
     * Remove image from gallery (for future extensibility)
     * @param {number} index - Index of image to remove
     */
    removeImage(index) {
        if (index >= 0 && index < this.images.length && this.images.length > 2) {
            this.images.splice(index, 1);
            this.renderGallery();
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
# Modern Image Gallery Widget

A reusable JavaScript class that creates an interactive image gallery with thumbnails and a main display area. Perfect for showcasing project portfolios or image collections.

## Features

- **Click thumbnails to view different images** - Interactive thumbnail navigation
- **Smooth fade transitions between images** - Professional animations
- **Multi-paragraph HTML descriptions** - Rich text support with HTML formatting
- **Fully responsive design** - Works seamlessly on desktop and mobile
- **Multiple galleries on one page** - Each gallery operates independently
- **Modern Error handling** - Comprehensive validation with detailed error context
- **Accessibility features** - ARIA labels, keyboard focus, and screen reader support
- **No external dependencies** - Pure vanilla JavaScript, works offline

## Quick Start

1. Include the CSS and JavaScript files in your HTML
2. Create the gallery HTML structure
3. Initialize the gallery with your images

```html
<div class="gallery-widget" id="my-gallery">
    <div class="main-display">
        <div class="main-image-wrapper">
            <img class="main-image" alt="Featured image">
        </div>
        <div class="main-image-info">
            <h2 class="main-title"></h2>
            <div class="main-description"></div>
        </div>
    </div>
    
    <div class="thumbnail-container">
        <div class="thumbnails">
            <!-- Thumbnails generated automatically -->
        </div>
    </div>
</div>
```

## Adding Images

Initialize the gallery by passing a container element and your images array:

```javascript
// Define your images
const myImages = [
    {
        src: 'images/01-homepage-1024.png',
        title: 'Homepage Design',
        description: '<p>A modern homepage layout with clean design.</p><p>Features responsive elements and intuitive navigation.</p>'
    },
    {
        src: 'images/02-projects-1024.png',
        title: 'Projects Overview',
        description: '<p>Comprehensive project gallery showcase.</p><p>Interactive cards with hover effects.</p>'
    },
    // Add more images...
];

// Initialize the gallery
const gallery = new ImageGallery(
    document.getElementById('my-gallery'),
    myImages
);
```

## Multiple Galleries

You can create multiple independent galleries on the same page:

```javascript
// First gallery
const gallery1 = new ImageGallery(
    document.getElementById('gallery1'),
    portfolioImages
);

// Second gallery with different images
const gallery2 = new ImageGallery(
    document.getElementById('gallery2'),
    productImages
);
```

## Image Format

Each image object must contain:
- **src** (string): Path to the image file
- **title** (string): Display title for the image
- **description** (string): HTML description supporting multiple paragraphs

## Error Handling

The gallery provides detailed error messages if:
- Container element is missing
- Images array is invalid or has fewer than 2 images
- Individual image objects are missing required properties
- Required HTML elements are not found in the container

## Browser Support

- All major browsers: Chrome, Firefox, Safari, Edge

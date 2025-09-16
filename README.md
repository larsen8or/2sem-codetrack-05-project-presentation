# Modern Image Gallery

A simple, standalone HTML image gallery built with vanilla HTML, CSS, and JavaScript.

## Features

- **Modern, UX-friendly design** with clean cards layout
- **Responsive design** that works on desktop and mobile
- **Modal view** for full-size image viewing
- **Navigation controls** with previous/next buttons
- **Keyboard support** (Arrow keys, Escape to close)
- **Accessibility features** with proper ARIA labels and focus management
- **Easily maintainable** through JavaScript image array
- **No external dependencies** - works offline

## How to Use

1. Open `index.html` in any modern web browser
2. Click on any image to view it in full size
3. Use navigation buttons or arrow keys to browse through images
4. Press Escape or click the X to close the modal

## Adding New Images

To add new images, simply edit the `images` array in `script.js`:

```javascript
this.images = [
    {
        src: 'path/to/your/image.jpg',
        title: 'Your Image Title',
        description: 'Your image description here.'
    },
    // Add more images...
];
```

## Requirements Met

- ✅ Standalone HTML page with vanilla HTML, CSS, and JavaScript
- ✅ Simple and UX-friendly gallery design
- ✅ Images with descriptions for each
- ✅ Maintained through JavaScript array
- ✅ Supports minimum 2 images and scales to unlimited
- ✅ Modern, maintainable code structure
//Thank you ChatGPT
// When clicking on the image, show it in the middle of the screen
const images = document.querySelectorAll('.photo img');

// Save the Map of the initial location and size of each photo
const originalPositions = new Map();
// Add a click event listener for each image
images.forEach(image => {
  image.addEventListener('click', () => {
    if (image.classList.contains('expanded')) {
      // Restore picture to original position and size
      const original = originalPositions.get(image);
      if (original) {
        image.style.position = original.position;
        image.style.top = original.top;
        image.style.left = original.left;
        image.style.width = original.width;
        image.style.height = original.height;
        image.style.transform = original.transform;
        image.classList.remove('expanded');
      }
    } else {
      // Save the initial position and size of the current picture
      const rect = image.getBoundingClientRect();
      originalPositions.set(image, {
        position: image.style.position || 'relative',
        top: image.style.top || '',
        left: image.style.left || '',
        width: `${image.offsetWidth}px`,
        height: `${image.offsetHeight}px`,
        transform: image.style.transform || '',
      });

      // Enlarge the picture to the center of the screen
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;
      image.style.position = 'absolute';
      image.style.top = `${rect.top + scrollY}px`;
      image.style.left = `${rect.left + scrollX}px`;
      image.style.width = `${rect.width}px`;
      image.style.maxWidth = `500px`;
      image.style.height = `${rect.height}px`;

      setTimeout(() => {
        image.style.top = `${scrollY + window.innerHeight / 2}px`;
        image.style.left = `${scrollX + window.innerWidth / 2}px`;
        image.style.transform = 'translate(-50%, -50%) scale(2.5)';
        image.classList.add('expanded');
      }, 0);
    }
  });
});

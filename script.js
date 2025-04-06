let draggedElement = null;

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  images.forEach((img, index) => {
    img.id = `div${index + 1}`; // Assign id div1 to div6
    img.addEventListener('dragstart', (e) => {
      draggedElement = e.target;
      e.target.classList.add('selected');
    });

    img.addEventListener('dragend', (e) => {
      e.target.classList.remove('selected');
    });

    img.addEventListener('dragover', (e) => {
      e.preventDefault(); // Allow dropping
    });

    img.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedElement && draggedElement !== e.target) {
        // Swap background images
        const temp = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = temp;
      }
    });
  });
});

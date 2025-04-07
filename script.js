let draggedElement = null;

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  images.forEach((img) => {
    // Don't overwrite the ID
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
        const temp = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = temp;
      }
    });
  });
});

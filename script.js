let draggedElement = null;

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  images.forEach((img) => {
    // 👇❌ REMOVE this line:
    // img.id = `div${index + 1}`;

    img.addEventListener('dragstart', (e) => {
      draggedElement = e.target;
      e.target.classList.add('selected');
    });

    img.addEventListener('dragend', (e) => {
      e.target.classList.remove('selected');
    });

    img.addEventListener('dragover', (e) => {
      e.preventDefault();
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

let isDragging = false;
let startX;
let scrollLeft;

const draggableCard = document.getElementById('draggableCard');

draggableCard.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - draggableCard.offsetLeft;
    scrollLeft = draggableCard.scrollLeft;
});

draggableCard.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - draggableCard.offsetLeft;
    const walk = (x - startX) * 2; 
    draggableCard.scrollLeft = scrollLeft - walk;
});

draggableCard.addEventListener('mouseup', () => {
    isDragging = false;
});

draggableCard.addEventListener('mouseleave', () => {
    isDragging = false;
});
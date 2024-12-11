document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    document.getElementById('next').addEventListener('click', nextImage);
    document.getElementById('prev').addEventListener('click', prevImage);

    showImage(currentIndex);
});
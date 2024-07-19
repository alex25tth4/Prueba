document.addEventListener('DOMContentLoaded', () => {
    // Animar las rosas
    const roses = document.querySelectorAll('.rose');
    roses.forEach((rose, index) => {
        setTimeout(() => {
            rose.style.transition = 'opacity 1s, transform 1s';
            rose.style.opacity = 1;
            rose.style.transform = 'scale(1.2)';
        }, index * 500);
    });
    // Animar las fotos
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.transition = 'opacity 1s, transform 3s';
            photo.style.opacity = 1;
            photo.style.transform = 'translateY(0)';
        }, index * 500);
    });


    // Crear corazones cayendo
    const heartRain = document.querySelector('.heart-rain');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heartRain.appendChild(heart);
    }
});

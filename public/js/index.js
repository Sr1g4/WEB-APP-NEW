document.addEventListener('DOMContentLoaded', () => {
    // Improved organization and added accessibility features

    const aboutMeButton = document.getElementById('aboutMeButton');
    aboutMeButton.addEventListener('click', toggleAboutMeSection);

    function toggleAboutMeSection() {
        // Enhanced toggle functionality with smooth transitions
        const aboutMeSection = document.getElementById('aboutMeContent');
        aboutMeSection.classList.toggle('visible');
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }

    initializeGallery();

    function initializeGallery() {
        document.querySelectorAll('.gallery img').forEach(image => {
            image.addEventListener('click', openLightbox);
        });
    }

    function openLightbox(event) {
        // Refactored lightbox creation for clarity and reusability
        const lightbox = createLightboxElement(event.target.src);
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => {
            lightbox.parentNode.removeChild(lightbox);
        });
    }

    function createLightboxElement(imageSrc) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        const img = document.createElement('img');
        img.src = imageSrc;
        lightbox.appendChild(img);
        return lightbox;
    }
});

var button = document.querySelector('.button');
var menu = document.querySelector('.menu');

if (button && menu) {
    button.onclick = function() {
        button.classList.toggle('active');
        menu.classList.toggle('active');
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const imageMap = {
        '2000': 'images/Infographie_biographieSP11_page-0001.jpg',
        '2010': 'images/Infographie_biographieSP22_page-0001.jpg',
        '2020': 'images/Infographie_biographieSP33_page-0001.jpg'
    };
    
    const boutons = document.querySelectorAll('.button-1');
    const imageVisuelle = document.getElementById('decade-visual');

    function changerImage(annee) {
        if (!imageVisuelle) return;

        boutons.forEach(btn => {
            btn.classList.remove('button-1-actif');
            if (btn.getAttribute('data-annee') === annee) {
                btn.classList.add('button-1-actif');
            }
        });

        const cheminImage = imageMap[annee];
        
        imageVisuelle.style.opacity = '0';

        setTimeout(() => {
            if (cheminImage) {
                imageVisuelle.src = cheminImage;
                imageVisuelle.onload = () => { imageVisuelle.style.opacity = '1'; };
            }
        }, 200);
    }

    boutons.forEach(bouton => {
        bouton.addEventListener('click', function() {
            const anneeCible = this.getAttribute('data-annee');
            changerImage(anneeCible);
        });
    });

    changerImage('2000');

});

document.addEventListener('DOMContentLoaded', () => {
    const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    if (!testimonialsWrapper || !testimonialCards.length) return;
    
    const firstCard = testimonialCards[0];
    const cardsPerView = 3; 
    let currentIndex = 0;
    const totalCards = testimonialCards.length;

    if (totalCards > cardsPerView) {
        testimonialsWrapper.style.width = 'fit-content'; 
    }

    function updateCarousel() {

const cardWidth = 350;
const cardGap = 30;
        
        const offset = -currentIndex * (cardWidth + cardGap);
        
        testimonialsWrapper.style.transform = `translateX(${offset}px)`;

        prevArrow.disabled = currentIndex === 0;
        nextArrow.disabled = currentIndex >= totalCards - cardsPerView;
    }

    nextArrow.addEventListener('click', () => {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex += cardsPerView; 
            updateCarousel();
        }
    });

    prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= cardsPerView; 
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            updateCarousel();
        }
    });

    setTimeout(updateCarousel, 100); 
});

document.addEventListener('DOMContentLoaded', () => {
    const photoWrapper = document.querySelector('.photo-carousel-wrapper');
    const prevPhotoArrow = document.querySelector('.prev-photo-arrow');
    const nextPhotoArrow = document.querySelector('.next-photo-arrow');
    const photoSlides = document.querySelectorAll('.photo-slide');

    if (!photoWrapper || !photoSlides.length) return;
    
    const viewportWidth = 1100; 
    let currentPhotoIndex = 0;
    const totalSlides = photoSlides.length; 

    function updatePhotoCarousel() {
        
        const offset = -currentPhotoIndex * viewportWidth;
        
        photoWrapper.style.transform = `translateX(${offset}px)`;

        prevPhotoArrow.disabled = currentPhotoIndex === 0;
        nextPhotoArrow.disabled = currentPhotoIndex >= totalSlides - 1;
    }

    nextPhotoArrow.addEventListener('click', () => {
        if (currentPhotoIndex < totalSlides - 1) {
            currentPhotoIndex++; 
            updatePhotoCarousel();
        }
    });

    prevPhotoArrow.addEventListener('click', () => {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--; 
            updatePhotoCarousel();
        }
    });

    setTimeout(updatePhotoCarousel, 100); 
});
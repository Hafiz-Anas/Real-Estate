//RESPONSIVE NAVBAR
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s  ease forwards  ${index / 7 + 0.3}s`;
        }
    });

    burger.classList.toggle('toggle');
});

//SLIDER
const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
var sectionIndex = 0;

arrowLeft.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translateX(' + (sectionIndex) * -33 + '%)';
});

arrowRight.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    slider.style.transform = 'translateX(' + (sectionIndex) * -33 + '%)';
});
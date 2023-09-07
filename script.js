let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .heading2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .contact form, .portfolio-box, .education-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content h3, .about-content p', { origin: 'right' });

// Typed JS
const typed = new Typed('.typing', {
    strings: ['Software Engineer', 'CMS Ambassador', 'Student', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 500,
    loop: true
});

// Add some random animation to elements for fun
const animatedElements = document.querySelectorAll('.animated');

animatedElements.forEach(element => {
    let randomAnimation = ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'];
    let randomDelay = Math.floor(Math.random() * 1000); // Random delay between 0 and 1000ms
    let randomAnimationClass = randomAnimation[Math.floor(Math.random() * randomAnimation.length)];
    
    element.style.animation = `${randomAnimationClass} 1s ease ${randomDelay}ms both`;
});

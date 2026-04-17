// Loading screen
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});


const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuIcon = mobileMenuToggle.querySelector('i');

mobileMenuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        mobileMenuIcon.classList.remove('fa-bars');
        mobileMenuIcon.classList.add('fa-times');
    } else {
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(45, 45, 45, 0.85)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.backgroundColor = '#2d2d2d';
        nav.style.backdropFilter = 'none';
    }
});

// Initialize Advanced Scroll Animations
document.querySelectorAll('.section-title').forEach(el => el.setAttribute('data-aos', 'fade-up'));
document.querySelectorAll('.skill-category').forEach((el, index) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', (index * 100).toString());
});
document.querySelectorAll('.project-card').forEach((el, index) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', (index * 100).toString());
});

const heroText = document.querySelector('.hero-text');
if (heroText) heroText.setAttribute('data-aos', 'fade-right');

const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    heroImage.setAttribute('data-aos', 'zoom-in');
    heroImage.setAttribute('data-aos-delay', '200');
}

const aboutText = document.querySelector('.about-text');
if (aboutText) aboutText.setAttribute('data-aos', 'fade-up');

document.querySelectorAll('.education-card').forEach(el => el.setAttribute('data-aos', 'fade-up'));

AOS.init({
    duration: 800,
    once: false,
    offset: 100
});

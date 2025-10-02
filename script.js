// Lumen Etoile — minimal interactive behaviours

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

const toggleNav = () => {
    if (!hamburger || !navMenu) return;
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        toggleNav();
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleNav();
            }
        });
    });
}

const maybeCompactNav = () => {
    if (!navbar) return;
    if (window.scrollY > 24) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', maybeCompactNav, { passive: true });
maybeCompactNav();

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const button = contactForm.querySelector('button[type="submit"]');
        if (button) {
            button.textContent = 'Signal Sent';
            button.disabled = true;
            button.classList.add('sent');
        }
    });
}

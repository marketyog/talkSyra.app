// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.style.display = 'none';
    });
});

// Responsive Hamburger Menu Styling
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1));
            padding: 2rem;
            gap: 1rem;
            width: 100%;
            text-align: center;
        }

        .nav-menu.active {
            display: flex;
        }

        .nav-menu a {
            display: block;
            padding: 0.8rem 0;
            text-align: center;
        }
    }
`;
document.head.appendChild(style);

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Smooth scroll for navigation links
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

// Navbar sticky background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1))';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const formData = new FormData(this);
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature-card, .stat, .faq-item, .contact-item {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
    }
`;
document.head.appendChild(animationStyle);

// Observe feature cards and other elements
document.querySelectorAll('.feature-card, .stat, .faq-item, .contact-item').forEach(element => {
    observer.observe(element);
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active nav link styling
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-menu a.active {
        color: var(--primary-color);
    }
    
    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeNavStyle);

// Download button tracking
document.querySelectorAll('.download-btn, .btn-primary').forEach(btn => {
    if (btn.href && btn.href.includes('play.google.com')) {
        btn.addEventListener('click', () => {
            console.log('Download link clicked');
        });
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('TalkSyra website loaded successfully');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.6s ease forwards';
    }
});

// Mobile responsiveness handler
function handleResponsive() {
    if (window.innerWidth <= 768) {
        // Mobile specific code
    } else {
        // Desktop specific code
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    
    // You can use this for a progress bar if needed
});

// Prevent default form submission if no backend
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!this.action || this.action === '') {
            e.preventDefault();
            alert('Form submitted! We will contact you soon.');
            this.reset();
        }
    });
});

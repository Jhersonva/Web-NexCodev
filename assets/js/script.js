// ================================
// VARIABLES GLOBALES
// ================================
const contactForm = document.getElementById('contactForm');
const navbar = document.getElementById('navbar');
const navbarNav = document.getElementById('navbarNav');

// ================================
// NAVBAR STYLING ON SCROLL
// ================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ================================
// CERRAR NAVBAR AL HACER CLICK EN UN ENLACE
// ================================
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(navbarNav, {
            toggle: false
        });
        bsCollapse.hide();
    });
});

// ================================
// SMOOTH SCROLL MEJORADO
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// VALIDACIÓN Y ENVÍO DE FORMULARIO
// ================================
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validación básica
        if (!name || !email || !subject || !message) {
            showNotification('Por favor, completa todos los campos', 'error');
            return;
        }

        // Validación de email
        if (!isValidEmail(email)) {
            showNotification('Por favor, ingresa un email válido', 'error');
            return;
        }

        // Aquí puedes enviar el formulario a tu servidor
        // Por ahora, mostramos un mensaje de éxito
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message
        });

        showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.', 'success');
        contactForm.reset();

        // Nota: Para enviar realmente el formulario, descomenta lo siguiente:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            showNotification('¡Mensaje enviado exitosamente!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showNotification('Error al enviar el mensaje', 'error');
            console.error('Error:', error);
        });
        */
    });
}

// ================================
// VALIDACIÓN DE EMAIL
// ================================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ================================
// NOTIFICACIONES
// ================================
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`;
    notification.setAttribute('role', 'alert');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.5s ease;
    `;

    const icon = type === 'success' ? '✓' : '✕';
    notification.innerHTML = `
        <strong>${icon} ${type === 'success' ? 'Éxito' : 'Error'}</strong>
        <p>${message}</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(notification);

    // Auto remover después de 5 segundos
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// ================================
// ANIMACIONES AL SCROLL (Intersection Observer)
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos
const animatedElements = document.querySelectorAll('.service-card, .team-card, .feature-card, .testimonial-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ================================
// CONTADOR DE NÚMEROS
// ================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ================================
// CARRUSEL DE PORTAFOLIO MEJORADO
// ================================
const carousel = document.getElementById('portfolioCarousel');
if (carousel) {
    carousel.addEventListener('slide.bs.carousel', function(e) {
        // Efecto al cambiar de slide
        const slide = e.relatedTarget;
        slide.style.animation = 'zoomIn 0.5s ease';
    });

    // Auto-avance cada 8 segundos (opcional)
    // setInterval(() => {
    //     const bsCarousel = new bootstrap.Carousel(carousel);
    //     bsCarousel.next();
    // }, 8000);
}

// ================================
// EFECTOS DE HOVER EN IMÁGENES
// ================================
const projectImages = document.querySelectorAll('.portfolio-image');
projectImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ================================
// ACTIVAR LINKS ACTIVOS EN NAVBAR
// ================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ================================
// EFECTO PARALLAX (Opcional)
// ================================
const parallaxElements = document.querySelectorAll('.hero-image');
window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// ================================
// LAZY LOADING DE IMÁGENES
// ================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ================================
// DARK MODE TOGGLE (Opcional)
// ================================
function initDarkMode() {
    const darkModeToggle = localStorage.getItem('darkMode');
    
    if (darkModeToggle === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    console.log('NexCodev - Página cargada correctamente');
});

// ================================
// FUNCIONES AUXILIARES
// ================================

// Desplazarse a la parte superior
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Obtener parámetro de URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado al portapapeles', 'success');
    });
}

// ================================
// EVENTOS DE CARGA
// ================================
window.addEventListener('load', () => {
    console.log('Todos los recursos han sido cargados');
});

window.addEventListener('error', (event) => {
    console.error('Error en la página:', event);
});

/* ========================================
   ORGTECHSTROY WEBSITE JAVASCRIPT
   ======================================== */

// === PHONE MASK ===
document.addEventListener('DOMContentLoaded', function() {
    
    // Phone input mask
    const phoneInput = document.getElementById('phone');
    if (phoneInput && typeof IMask !== 'undefined') {
        const phoneMask = IMask(phoneInput, {
            mask: '+{7} (000) 000-00-00',
            lazy: false
        });
    }
    
    // === SMOOTH SCROLL ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // === HEADER SHADOW ON SCROLL ===
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
    
    // === MOBILE CALL BUTTON ===
    // Show "Call" button on mobile devices
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const callButtons = document.querySelectorAll('.btn-call');
        callButtons.forEach(button => {
            button.style.display = 'inline-block';
        });
    }
    
    // === FORM VALIDATION ===
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const phone = document.getElementById('phone').value;
            const consent = document.querySelector('input[name="consent"]').checked;
            
            // Check phone format
            if (phone.length < 18) {
                e.preventDefault();
                alert('Пожалуйста, введите полный номер телефона');
                return false;
            }
            
            // Check consent
            if (!consent) {
                e.preventDefault();
                alert('Необходимо согласие на обработку персональных данных');
                return false;
            }
        });
    }
    
    // === FADE IN ANIMATION ON SCROLL ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // === YEAR AUTO-UPDATE ===
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // === FORM SUCCESS MESSAGE ===
    // Check if form was successfully submitted (Netlify adds ?success parameter)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
        // Remove success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // === CONSOLE MESSAGE ===
    console.log('%cОргТехСтрой - Песок Чулымы', 'font-size: 20px; font-weight: bold; color: #C9A961;');
    console.log('%cСайт создан с использованием современных веб-технологий', 'font-size: 12px; color: #666;');
});

// === EXTERNAL LINKS ===
// Open external links in new tab
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// === PERFORMANCE MONITORING ===
window.addEventListener('load', function() {
    // Log page load time
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});

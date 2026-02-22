// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== BOOK HERO — click to open =====
(function () {
    const book      = document.getElementById('mainBook');
    const cover     = document.getElementById('bookCover');
    const hint      = document.getElementById('bookHint');
    if (!book || !cover) return;

    function openBook() {
        cover.classList.add('open');
        book.style.cursor   = 'default';
        book.style.pointerEvents = 'none';
        if (hint) hint.classList.add('hidden');

        // Begin scrolling once the cover flip is mostly complete (CSS transition: 1.5s)
        var SCROLL_DELAY_MS = 1100;
        setTimeout(function () {
            var next = document.getElementById('services');
            if (next) next.scrollIntoView({ behavior: 'smooth' });
        }, SCROLL_DELAY_MS);
    }

    book.addEventListener('click', openBook);
    book.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openBook();
        }
    });
})();

// FAQ accordion functionality
document.querySelectorAll('#faq button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.setAttribute('data-feather', 'chevron-down');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.setAttribute('data-feather', 'chevron-up');
        }
        
        feather.replace();
    });
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
}
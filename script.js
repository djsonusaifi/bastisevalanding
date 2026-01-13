// NO AUTO POPUP ON LOAD - Removed window.onload popup

// Initialize on load
window.onload = function() {
    observeElements();
};

// Open iOS popup function (Only on button click)
function openIOSPopup() {
    const modal = document.getElementById('iosPopupModal');
    modal.style.display = 'flex';
    modal.style.animation = 'fadeIn 0.3s ease';
    toggleBodyScroll(true);
    setTimeout(() => {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 100);
}

// Close iOS popup function
function closeIOSPopup() {
    const modal = document.getElementById('iosPopupModal');
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        modal.style.display = 'none';
        toggleBodyScroll(false);
    }, 300);
}

// Close popup when clicking outside
window.onclick = function(event) {
    const iosModal = document.getElementById('iosPopupModal');
    if (event.target == iosModal) {
        closeIOSPopup();
    }
}

// Close with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeIOSPopup();
    }
});

// Prevent body scroll when modal is open
function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Animate elements on scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .phone-frame, .badge, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Add fade animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
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

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero::before');
    if (heroBackground) {
        heroBackground.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
    }
});

// Add loading animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .other-app-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        }, 100);
    });
});

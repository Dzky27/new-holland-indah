// ===== Navbar Functionality =====

// Toggle Mobile Menu
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 968 && mobileToggle && navLinks) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Set Active Navigation =====
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage ||
            (currentPage === '' && linkHref === 'index.html') ||
            (linkHref === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set active navigation
    setActiveNav();

    const animatedElements = document.querySelectorAll(
        '.facility-card, .room-card, .info-item, .timeline-item, .team-card, .facility-item'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Check if notification already exists
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--accent)' : 
                     type === 'danger' ? 'var(--danger)' : 
                     type === 'warning' ? 'var(--warning)' : 
                     'var(--info)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// ===== Add animation styles =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== WhatsApp Button (floating) =====
function createWhatsAppButton() {
    // Check if button already exists
    if (document.querySelector('.whatsapp-float')) return;

    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/6289657769065';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '💬';
    whatsappBtn.title = 'Chat via WhatsApp';
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: #25D366;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        z-index: 999;
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
    `;

    whatsappBtn.addEventListener('mouseenter', () => {
        whatsappBtn.style.transform = 'scale(1.1)';
        whatsappBtn.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.6)';
    });

    whatsappBtn.addEventListener('mouseleave', () => {
        whatsappBtn.style.transform = 'scale(1)';
        whatsappBtn.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
    });

    // Don't show on dashboard pages
    const currentPath = window.location.pathname;
    if (!currentPath.includes('dashboard') &&
        !currentPath.includes('admin') &&
        !currentPath.includes('tenant') &&
        !currentPath.includes('owner')) {
        document.body.appendChild(whatsappBtn);
    }
}

// ===== Price Calculator (UI Only) =====
function calculatePrice(capacity, hasExtraBed) {
    const basePrice = 500000;
    const extraPersonPrice = 200000;

    if (capacity === 2 || hasExtraBed) {
        return basePrice + extraPersonPrice;
    }
    return basePrice;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// ===== Simple Form Submit Simulation =====
function initializeForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show success notification
            showNotification('Pesan berhasil dikirim! Terima kasih telah menghubungi kami.', 'success');

            // Reset form
            setTimeout(() => {
                form.reset();
            }, 1000);
        });
    });
}

// ===== Page Load Animations =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Create WhatsApp floating button
    createWhatsAppButton();

    // Initialize simple form handling
    initializeForms();

    // Initialize room filters
    initializeRoomFilters();

    // Initialize FAQ toggles
    initializeFAQs();
});

// ===== Utility Functions =====

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date));
}

// Format date with time
function formatDateTime(date) {
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Room Filter Functionality (UI Only) =====
function initializeRoomFilters() {
    const roomCards = document.querySelectorAll('.room-card');
    const roomTypeFilter = document.getElementById('roomType');
    const roomStatusFilter = document.getElementById('roomStatus');
    const roomPriceFilter = document.getElementById('roomPrice');
    const roomCapacityFilter = document.getElementById('roomCapacity');
    const resetFilterBtn = document.getElementById('resetFilter');

    if (!roomCards.length) return;

    function filterRooms() {
        const typeValue = roomTypeFilter ? roomTypeFilter.value : '';
        const statusValue = roomStatusFilter ? roomStatusFilter.value : '';
        const priceValue = roomPriceFilter ? roomPriceFilter.value : '';
        const capacityValue = roomCapacityFilter ? roomCapacityFilter.value : '';

        let visibleCount = 0;

        roomCards.forEach(card => {
            const type = card.dataset.type || '';
            const status = card.dataset.status || '';
            const price = parseInt(card.dataset.price) || 0;
            const capacity = card.dataset.capacity || '';

            let typeMatch = !typeValue || type === typeValue;
            let statusMatch = !statusValue || status === statusValue;
            let priceMatch = !priceValue || (
                priceValue === '500000' ? price <= 500000 :
                priceValue === '700000' ? price > 500000 && price <= 700000 :
                priceValue === '800000' ? price >= 700000 : true
            );
            let capacityMatch = !capacityValue || capacity === capacityValue;

            if (typeMatch && statusMatch && priceMatch && capacityMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show no results message
        const roomsContainer = document.getElementById('roomsContainer');
        let noResults = document.getElementById('noResults');

        if (visibleCount === 0 && roomsContainer) {
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.id = 'noResults';
                noResults.className = 'no-results';
                noResults.style.cssText = `
                    text-align: center;
                    padding: 3rem;
                    background: #f8f9fa;
                    border-radius: 10px;
                    margin: 2rem 0;
                `;
                noResults.innerHTML = `
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                    <h3 style="color: var(--text); margin-bottom: 0.5rem;">Tidak ada kamar yang sesuai dengan filter</h3>
                    <p style="color: var(--text-light); margin-bottom: 1rem;">Silakan coba filter lain atau hubungi kami untuk informasi lebih lanjut</p>
                    <a href="kontak.html" class="btn-primary" style="margin-top: 1rem;">Hubungi Kami</a>
                `;
                roomsContainer.appendChild(noResults);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    // Event listeners for filters
    if (roomTypeFilter) roomTypeFilter.addEventListener('change', filterRooms);
    if (roomStatusFilter) roomStatusFilter.addEventListener('change', filterRooms);
    if (roomPriceFilter) roomPriceFilter.addEventListener('change', filterRooms);
    if (roomCapacityFilter) roomCapacityFilter.addEventListener('change', filterRooms);

    // Reset filter
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', () => {
            if (roomTypeFilter) roomTypeFilter.value = '';
            if (roomStatusFilter) roomStatusFilter.value = '';
            if (roomPriceFilter) roomPriceFilter.value = '';
            if (roomCapacityFilter) roomCapacityFilter.value = '';
            filterRooms();
        });
    }

    // Initialize filter
    filterRooms();
}

// ===== FAQ Functionality =====
function initializeFAQs() {
    const faqDetails = document.querySelectorAll('details');

    faqDetails.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                this.style.background = 'rgba(30, 90, 63, 0.05)';
                this.style.transition = 'background 0.3s ease';
            } else {
                this.style.background = 'white';
            }
        });
    });
}

// ===== Image Lazy Loading =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// ===== Back to Top Button =====
function createBackToTopButton() {
    if (document.querySelector('.back-to-top')) return;

    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = 'Kembali ke atas';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 998;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(30, 90, 63, 0.3);
    `;

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
            backToTopBtn.style.alignItems = 'center';
            backToTopBtn.style.justifyContent = 'center';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Don't show on dashboard pages
    const currentPath = window.location.pathname;
    if (!currentPath.includes('dashboard') &&
        !currentPath.includes('admin') &&
        !currentPath.includes('tenant') &&
        !currentPath.includes('owner')) {
        document.body.appendChild(backToTopBtn);
    }
}

// ===== Simple Search Functionality =====
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                showNotification(`Mencari: "${searchTerm}"`, 'info');
                // In a real app, this would filter/search content
                searchInput.value = '';
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}

// ===== Initialize on DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initializeLazyLoading();
    createBackToTopButton();
    initializeSearch();

    // Initialize all tooltips
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function(e) {
            const title = this.getAttribute('title');
            if (title) {
                const tooltipEl = document.createElement('div');
                tooltipEl.className = 'custom-tooltip';
                tooltipEl.textContent = title;
                tooltipEl.style.cssText = `
                    position: absolute;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    z-index: 10000;
                    white-space: nowrap;
                    pointer-events: none;
                `;
                document.body.appendChild(tooltipEl);

                const rect = this.getBoundingClientRect();
                tooltipEl.style.left = rect.left + window.scrollX + 'px';
                tooltipEl.style.top = rect.top + window.scrollY - tooltipEl.offsetHeight - 5 + 'px';

                this.setAttribute('data-tooltip', title);
                this.removeAttribute('title');

                this.addEventListener('mouseleave', function() {
                    if (tooltipEl.parentNode) {
                        tooltipEl.remove();
                    }
                    this.setAttribute('title', title);
                }, { once: true });
            }
        });
    });
});

// ===== Simple Booking Simulation =====
function initializeBookingButtons() {
    const bookButtons = document.querySelectorAll('.book-btn, .btn-booking');

    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Get room name safely
            const roomCard = this.closest('.room-card');
            const card = this.closest('.card');

            let roomName = 'Kamar';

            if (roomCard) {
                const nameElement = roomCard.querySelector('.room-name');
                if (nameElement) {
                    roomName = nameElement.textContent;
                }
            } else if (card) {
                const nameElement = card.querySelector('h3');
                if (nameElement) {
                    roomName = nameElement.textContent;
                }
            }

            showNotification(`Memulai proses booking untuk ${roomName}. Silakan hubungi kami via WhatsApp untuk melanjutkan.`, 'success');

            // Simulate opening WhatsApp
            setTimeout(() => {
                window.open('https://wa.me/6289657769065?text=Halo,%20saya%20tertarik%20untuk%20booking%20kamar', '_blank');
            }, 1500);
        });
    });
}

// Initialize booking buttons when page loads
document.addEventListener('DOMContentLoaded', initializeBookingButtons);

// Initialize booking buttons when page loads
document.addEventListener('DOMContentLoaded', initializeBookingButtons);

// ===== IMAGE LAZY LOADING =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback untuk browser lama
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
        });
    }
}

// Panggil saat halaman dimuat
window.addEventListener('load', initializeLazyLoading);
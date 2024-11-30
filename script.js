document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbar-links');

    // Toggle navbar links visibility on hamburger click
    if (hamburger && navbarLinks) {
        hamburger.addEventListener('click', function () {
            navbarLinks.classList.toggle('hidden');
            navbarLinks.classList.toggle('flex');
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // In a real scenario, you'd send this to a backend
                alert('Terima kasih sudah berlangganan newsletter Desa Purworejo!');
                emailInput.value = ''; // Clear the input
            }
        });
    }

    // Mobile Navigation Toggle (for smaller screens)
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navbar = document.getElementById('navbar');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navbar && navLinksContainer) {
        navbar.querySelector('.nav-container').insertBefore(navToggle, navLinksContainer);
        
        navToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Simple image gallery functionality (if needed on other pages)
    function initImageGallery() {
        const galleries = document.querySelectorAll('.image-gallery');
        
        galleries.forEach(gallery => {
            const images = gallery.querySelectorAll('img');
            const mainImage = gallery.querySelector('.main-image');
            
            images.forEach(img => {
                img.addEventListener('click', function() {
                    if (mainImage) {
                        mainImage.src = this.src;
                    }
                });
            });
        });
    }

    // Call gallery init if gallery exists
    if (document.querySelector('.image-gallery')) {
        initImageGallery();
    }
});

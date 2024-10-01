// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.bg_table a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset as needed
                    behavior: 'smooth'
                });
            }

            // Close the responsive menu after clicking a link (optional)
            const navContainer = document.getElementById('nav-links');
            if (navContainer.classList.contains('responsive')) {
                navContainer.classList.remove('responsive');
            }
        });
    });
});

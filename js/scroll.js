document.addEventListener('DOMContentLoaded', function() {
    const landingLink = document.querySelector('#landing a');
    if (landingLink) {
        landingLink.addEventListener('click', function(e) {
            e.preventDefault();
    
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
    
        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
        });
    }
});


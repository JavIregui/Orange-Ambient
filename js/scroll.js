document.addEventListener('DOMContentLoaded', function() {
    const landingLink = document.querySelector('#landing a');
    const goUp = document.querySelector('#goUp');
    const contactLink = document.getElementById('contactLink');
    const contact  = document.getElementById('contact');
    goUp.style.display = 'none';

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

    if(goUp) {
        goUp.addEventListener('click', function(e) {
            e.preventDefault();
    
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })

        window.addEventListener('scroll', function() {
            if (window.scrollY < 100) {
                goUp.style.display = 'none';
            } else {
                goUp.style.display = 'block';
            }
        });
    }

    if(contactLink && contact){
        contactLink.addEventListener('click', function(e){
            e.preventDefault();

            contact.scrollIntoView({
            behavior: 'smooth',
            });
        });
    }
});


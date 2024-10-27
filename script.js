// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.clientHeight;
        const scrollPos = window.pageYOffset;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (window.scrollY > sectionTop - window.innerHeight / 1.5) {
            section.classList.add('is-visible');
        }
    });
});

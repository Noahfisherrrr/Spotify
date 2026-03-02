const navLink = document.querySelectorAll('.nav-link');

navLink .forEach(link => {
    link.addEventListener('click', () => {
        navLink.forEach(nav => nav.classList.remove('is-active'));
        link.classList.add('is-active');
    });
});

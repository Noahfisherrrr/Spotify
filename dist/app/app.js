const navLink = document.querySelectorAll('.nav-link');
    let activeLink = document.querySelector('.nav-link.filter');

navLink.forEach(link => {
    link.addEventListener('click', () => {
        if (activeLink === link) return;
        
        if (activeLink) {
            activeLink.classList.remove('filter');
        }
        link.classList.add('filter');
        activeLink = link;
    });
    });
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

const friendsBtn = document.getElementById('friends-activity');
const friendsPanel = document.getElementById('friends-panel');
const friendsCloseBtn = document.getElementById('friends-close-btn');

function openFriends() {
    document.body.classList.add('friends-open');
}

function closeFriends() {
    document.body.classList.remove('friends-open');
}

friendsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('friends-open');
    friendsPanel.classList.toggle('active');
});

friendsCloseBtn.addEventListener('click', closeFriends);
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
    friendsPanel.style.display = 'block';
}

function closeFriends() {
    document.body.classList.remove('friends-open');
    friendsPanel.style.display = 'none';
}

friendsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.contains('friends-open') ? closeFriends() : openFriends();
});

friendsCloseBtn.addEventListener('click', closeFriends);
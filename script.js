const icon = document.querySelector('.icon');
const nav = document.querySelector('.nav');
const dropdown = document.querySelector('.dropdown');
const main = document.querySelector('main');

// Toggle nav menu
icon.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
});

// Hide nav on outside click
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !icon.contains(e.target)) {
        nav.classList.remove('active');
        dropdown.classList.remove('active');
    }
});

// Toggle dropdown menu (on small screens)
dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
        e.preventDefault(); // prevent link jump
        e.stopPropagation();
        this.classList.toggle('active');
    }
});

function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navMenu').classList.remove('active');
        });
    });
});

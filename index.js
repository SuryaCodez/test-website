const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'homepage.html';
});

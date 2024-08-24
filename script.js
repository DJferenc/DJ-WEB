document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Az itt megadott felhasználónév és jelszó csak példaként szerepel
    const validUsername = 'DJFerenc';
    const validPassword = 'gamer0061';

    const messageDiv = document.getElementById('message');

    if (username === validUsername && password === validPassword) {
        messageDiv.textContent = 'Sikeresen bejelentkezett!';
        messageDiv.style.color = 'green';
        // Itt irányít át a welcome.html oldalra
        window.location.href = 'welcome.html';
    } else {
        messageDiv.textContent = 'Hibás felhasználónév vagy jelszó.';
        messageDiv.style.color = 'red';
    }
});

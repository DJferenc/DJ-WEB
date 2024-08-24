document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Az itt megadott felhasználónév és jelszó csak példaként szerepel
        const validUsername = 'DJÁdám';
    const validPassword = '7777';

    const messageDiv = document.getElementById('message');

    if (username === validUsername && password === validPassword) {
        messageDiv.textContent = 'Sikeresen bejelentkezett!';
        messageDiv.style.color = 'green';
        // Átirányítás a sikeres bejelentkezés utáni oldalra
        window.location.href = 'https://djferenc.github.io/DJ-WEB/welcome.html';
    } else {
        messageDiv.textContent = 'Hibás felhasználónév vagy jelszó.';
        messageDiv.style.color = 'red';
    }
});

document.getElementById('login-form').addEventListener('input', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginButton = document.getElementById('login-btn');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Show login button only if both username and password are filled
    if (username !== '' && password !== '') {
        loginButton.style.opacity = '1'; // Show button
        loginButton.style.animation = 'glowButton 1.5s infinite'; // Apply glowing animation
    } else {
        loginButton.style.opacity = '0'; // Hide button if fields are not filled
        loginButton.style.animation = ''; // Remove glowing animation
    }
});

// Handling the form submission (just a placeholder for now)
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if both fields are filled
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        errorMessage.style.display = 'block';
    } else {
        alert('Login successful!');
    }
});

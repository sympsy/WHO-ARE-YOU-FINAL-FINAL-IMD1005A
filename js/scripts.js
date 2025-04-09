
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    setTheme(currentTheme);
} else {
    setTheme('dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
}

const submitButton = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');

if (submitButton && form) {
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill in all fields.');
            return;
        }

        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(function () {
            submitButton.textContent = 'Sent!';
            form.reset();
            submitButton.disabled = false;
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.classList.add('fade-in');
    });
});
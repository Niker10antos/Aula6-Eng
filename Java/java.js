const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
    let valid = true;

    // Validação de nome
    if (nameInput.value.trim() === "") {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Validação de e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Validação de senha
    if (passwordInput.value.length < 6) {
        document.getElementById('password-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
    }

    // Validação de mensagem
    if (messageInput.value.trim() === "") {
        document.getElementById('message-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    // Se não for válido, previne o envio do formulário
    if (!valid) {
        event.preventDefault();
    }
});
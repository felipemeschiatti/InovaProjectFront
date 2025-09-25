// No specific JavaScript functionality requested.
// This file is included to complete the html, css, js structure.

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita o envio padrão do formulário

            const emailInput = document.querySelector('input[type="email"]');
            const passwordInput = document.querySelector('input[type="password"]');

            if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                // Se ambos os campos estiverem preenchidos, redireciona para a home
                window.location.href = 'home.html';
            } else {
                // Caso contrário, avisa o usuário (opcional)
                alert('Por favor, preencha o e-mail e a senha.');
            }
        });
    }
});

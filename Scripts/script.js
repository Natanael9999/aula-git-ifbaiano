document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const useratual = localStorage.getItem("username");
    const passwordatual = localStorage.getItem("password");

    if (username === useratual || password === passwordatual) {
        window.location.href = './home.html';
        localStorage.setItem('authToken','Token')
    }
    else {
        alert("Usuário ou senha inválidos");
    }
});
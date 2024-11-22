/*document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        console.log('verificando username e password')
        alert('Por favor, preencha todos os campos.');
    }
    /*else if(username !== 'username' || password !== 'username'){
        alert('Usuário ou senha não reconhecidos.')
    }
    else {
        // alert(`Bem-vindo, ${username}!`);
        // Aqui você pode redirecionar o usuário para outra página
         window.location.href = 'home.html';
    }*/

    /*const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(user => user.nome === username && user.password === password);
     
    if (!usuario) {
        alert('Usuário ou senha não reconhecidos.');
        return;
    }
     
    alert(`Bem-vindo, ${usuario.nome}!`);
    localStorage.setItem('usuárioatual', usuario.nome);
    window.location.href = 'home.html';
});*/

/*document.getElementById('#form-cadastro').addEventListener('submit', function(Salvarnome){
    Salvarnome.preventDefault();
    
    const nome = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmpassword = document.getElementById('confirm-password').value.trim();

    const usuario = {nome, password};

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    localStorage.setItem("usuárioatual", nome);

    window.location.href = './login.html';
});*/

document.querySelector('#form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Código chegou até aqui.');

    // Redirecionar para uma página de teste
    window.location.href = './home.html';
});
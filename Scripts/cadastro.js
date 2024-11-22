document.querySelector('.cadastro-form').addEventListener('submit', function(Salvarnome){
    Salvarnome.preventDefault();
    
    const nome = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmpassword = document.getElementById('confirm-password').value.trim();

    if((password === confirmpassword) && (password !== '' && nome !== '')){
        localStorage.setItem("username", nome)
        localStorage.setItem("password", password)

        window.location.href = './index.html';
    }

    else if(password !== confirmpassword){
        alert("As senhas não estão iguais!");
    }

    else{
        alert("Preencha todos os campos");
    }
});
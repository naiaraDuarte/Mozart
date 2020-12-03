$("#logar").click(function(){
    var nomeUsuario = document.getElementById("nomeusuario").value;
    var senha = document.getElementById("senha").value;
    if(nomeUsuario == "admin" && senha == "1234"){
        $(location).attr('href', 'home.html');
    }else{
        alert("Login e senha incorreto");
    }
});

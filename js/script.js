// script.js
document.getElementById('loginForm').addEventListener('click', acessa);
    
    
    function acessa() {

    
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

    
        if (username == "anhaguera" && password === "anhaguera") {
                location.href = "./home.html"; // Redireciona para outra página
            }
    
    }        



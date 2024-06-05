// script.js
    const usuario = document.getElementById('username');
    const senha = document.getElementById('password');
    
    // Adiciona ouvintes de eventos para os campos de entrada
    usuario.addEventListener('input', acessa);
    senha.addEventListener('input', acessa);
    
function acessa() {
    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');
    let username = usernameInput.value;
    let password = passwordInput.value;
    let tamanhosenha= password.length;
    if (username && password.length>8) 
        {
           
            
            if (username =="anhaguera" && password=="anhaguera")
                {
                    message.style.display = 'block'; // Mostra a mensagem
                    setTimeout(function() 
                    {
                        window.location.href = "./home.html";
                    }, 2000);

                }
            else{
                alert("Usuario ou senha incorreto");
        }    
    } else {
        console.error("Elemento não encontrado");
    }

    
       /* if (username == "anhaguera" && password === "anhaguera") {
                location.href = "./home.html"; // Redireciona para outra página
            }
    */
    }       



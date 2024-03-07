
async function CadastrarUsuarios() {


    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;
    const premium = document.getElementById('isPremium').value
    let statusCheckbox = isPremium.checked
    try {
        

        let statusBoolean = statusCheckbox ? true : false
    
        const perfil = {
            nome: nome,
            email: email,
            senha: senha,
            isPremium: statusBoolean
        }

        console.log(perfil)

        const url = 'http://127.0.0.1:5080/usuario'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(perfil)
        }  


            await fetch(url, options)

            alert("Cadastro com Sucesso !!");

            window.location.href = "../tarefas/anotacoes.html"


        }catch (error) {
            console.error('Erro:', error);
            alert("Erro ao Cadastrar !!");
        }
    }

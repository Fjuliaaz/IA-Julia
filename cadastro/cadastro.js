const button = document.getElementById('cadastrar')

async function validarLogin(){

    const nome = document.getElementById('usuario').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if(nome === '' || email === '' || senha === ''){
        alert('Preencha os Campos Corretamente....')
    } else {

        const users = await fetch('http://localhost:5080/usuario') 
        const listUsers = await users.json()

        listUsers.forEach((user) => {
            if(nome === user.nome && senha === user.senha && email === user.email){
                alert('Usuário cadastrado com Sucesso !')
                window.location.href = '../tarefas/anotacoes.htl'
            }
        })

    }
}

window.onload = () => {
   button.addEventListener('Cadastrar', validarLogin)
}
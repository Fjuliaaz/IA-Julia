// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// const port = process.env.PORT || 5080;

// server.use(middlewares);
// server.use(router);
// server.listen(port, () => {
//     console.log('JSON Server is running in http://localhost:${port}/contatos');
// });

const button = document.getElementById('login')

async function validaLogin(){
    const nome = document.getElementById('nome')
    const senha = document.getElementById('senha')

    if(nome === '' || senha === ''){
        alert('Preencha os campos corretamente...')
    } else {
        const users = await fetch('http://127.0.0.1:5500/Front-End/index.html')
        const listUsers = await users.json()

        const testeLogin = new Boolean (false);

        listUsers.forEach((user) => {
            if (nome === user.nome && senha === user.senha){
                alert('Usuário logado com sucesso!!!')
                testeLogin = true;
                window.location.href = '../pagina inicial/paginaInicial.html'
            }
        })


    }
}

window.onload = () => {
    button.addEventListener('click', validaLogin)
}

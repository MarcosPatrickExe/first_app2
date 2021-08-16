const router = require("express").Router();

//let layout = require("./views/layout.ejs");

/*Especifica a pasta contendo arquivos estáticos.
O nome 'public não precisará ser colocado na rota
Para serem alcançados os arquivos e pastas que estão dentro dele.
Por isso na imagem que está na página home.ejs só há o indicativo para 'images' */
//router.use(express.static('public'));
//router.use(express.static(__dirname + 'public'));

//router.set('view engine','ejs'); pode ativar o EJS aqui ou na pasta "index.js"

router.get('/', (req, res)=>{
    //res.render('Minha página Home!!')
    res.render('layout', {users: users});
});

router.get('/about', (req, res)=>{
    //res.render('Minha página Home!!')
    res.send('Minha página Sobre mim, o autor!!');
});

/*
<%
forEach(let c in users){
     <td><%= users[c].nome    %></td>
     <td><%= users[c].email   %></td>
     <td><%= users[c].address %></td>
     <td><%= users[c].age     %></td>
     <td><%= users[c].height  %></td>
     <td><%= users[c].vote()  %></td>
}
%>
*/

router.get('/description', (req, res)=>{
    res.send('site criado com a intenção de.... etc...');
    //res.render('Minha página sobre', {title: 'Sobre quem criou a página', message:'Sou eu!!!'});
});


router.get('/about', (req, res)=>{
/*
    let userss = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    },{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    },{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }]
*/

    //res.render('pages/about', {usuarios: userss});
    res.render('./pages/about', {users: users});
});


router.get('/cadastro', (req, res)=>{
    /*let users = [
        {nome: 'wellington', idade: 40, endereco: 'rua fulano de tal'},
        {nome: 'rafae', idade: 40, endereco: 'rua fulano de tal'}
    ]; */

    res.render('pages/cadastro', {users: users});//utilizamdo a variavel gloabl 'users'
/*  Chamando a pagina 'cadastro' da pasta 'pages' 
    dentro de 'public' e enviando dados de usuários dentro de users*/
});


router.post('/cadastro/remove', (req, res)=>{
    let item = req.body.id; //pega o valor passado através do parâmetro id e atribui a variável item. 

    users.splice(item, 1);//este método permite adicionar ou remover um item do vetor em uma dada posição. 
    //res.render('pages/cadastro',{users:users});

    console.log("Elementos cadastrados: "+users);

    res.sendStatus(200);//envia mensagem 200 significando que as modificacoes foram ok
    //res.json({"nome": "patrick", "idade": "20"});
});


router.post('cadastro/update', (require, response)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[require.body.id].name = require.body.name;//pegando o campo 'nome' que veio no corpo/body da requisicao
    users[require.body.id].email = require.body.email;
    users[require.body.id].address = require.body.email;
    users[require.body.id].age = require.body.email;
    users[require.body.id].height = require.body.email;
    users[require.body.id].vote = require.body.email;

    console.log("Dados recebidos: ", require.body);
    response.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
});


router.get('/cadastro/list', (req, res)=>{

});



module.exports = router;
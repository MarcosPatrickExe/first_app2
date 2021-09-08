//const { response } = require("express");
const express = require("express");
//const expApp = exp();
const router = express.Router();
const convertJSONbody = require("body-parser").json();//Importando variável que permitirá a leitura dos campos do formulário
//const convertURLBody = require("body-parser").urlencoded({ extended: true });

const {v4 : gerarIdAleatorio} = require("uuid");

//express().use(express.urlencoded({extended: true}));

router.use(express.static('public'));

//let layout = require("./views/layout.ejs");
/*Especifica a pasta contendo arquivos estáticos.
O nome 'public não precisará ser colocado na rota
Para serem alcançados os arquivos e pastas que estão dentro dele.
Por isso na imagem que está na página home.ejs só há o indicativo para 'images' */
//router.use(express.static('public'));
//router.use(express.static(__dirname + 'public'));


router.get('/', function(req, res){
    //res.render('Minha página Home!!')
    res.render('./pages/layout');
});


//--------------------------------------------------------------------------------------------
router.get('/sign-in', function(req, res){
    /*let users = [
        {nome: 'wellington', idade: 40, endereco: 'rua fulano de tal'},
        {nome: 'rafae', idade: 40, endereco: 'rua fulano de tal'}
    ]; */

    res.render('./pages/cadastro', {users: users});//utilizamdo a variavel gloabl 'users'
/*  Chamando a pagina 'cadastro' da pasta 'pages' 
    dentro de 'public' e enviando dados de usuários dentro de users*/
});
//--------------------------------------------------------------------------------------------

//npm cache clean --force

//--------------------------------------------------------------------------------------------
router.post('/cadastrarDados', convertJSONbody, (req, res)=>{

    console.log("body da requisicao recebida: ");
    console.dir(req.body);

    /*se o formulario requisitar com o metodo "GET" você utilizaria a propriedade "query" para acessar os dados:
    console.log("Dados recebidos no server: ");
    console.log("name: "+req.query.name);
    console.log("address: "+req.query.address);
    console.log("email: "+req.query.email);
    console.log("age: "+req.query.age);
    console.log("height: "+req.query.height);
    */


    let novosDados = {
        codigoID: gerarIdAleatorio(),
        name: req.body.name,
        address: req.body.address,
        email:  req.body.email,
        age: req.body.age,
        height: req.body.age,
        vote: req.body.vote
    };

    users.push({...novosDados});

    console.log("usuário cadastrado com sucesso!!! Dados recebidos de: "+novosDados.name); 
    //res.send("usuário atualizado com sucesso!!! response do servidor: "+req.body.name);
    //res.render('./pages/cadastro');
    //convert the response in JSON format
    //res.send(JSON.stringify(response));
});
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
router.get('/atualizar', function(require, response){
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    /*
     let novosDados = (pedido.body);

    for( posicaoUsuario in users ){
        if(users[posicaoUsuario].codigoID == novosDados.codigoID){
                users[posicaoUsuario] = novosDados;
        }
    }
    */

     /*
    users[require.body.id].name = require.body.name;//pegando o campo 'nome' que veio no corpo/body da requisicao
    users[require.body.id].email = require.body.email;
    users[require.body.id].address = require.body.email;
    users[require.body.id].age = require.body.email;
    users[require.body.id].height = require.body.email;
    users[require.body.id].vote = require.body.email;
    */

    console.log("Dados recebidos: ", require.body);
    //response.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    response.render('./pages/atualizar', {users: users});
});
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
router.get('./about', (req, res)=>{
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

     //res.render('Minha página Home!!')
     // res.send('Minha página Sobre mim, o autor!!');

    //res.render('pages/about', {usuarios: userss});
     // res.render('./pages/about', {users: users});
      res.send('site criado com a intenção de.... etc...');
    //res.render('Minha página sobre', {title: 'Sobre quem criou a página', message:'Sou eu!!!'});
})
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
router.post('/remove', (req, res)=>{
    let item = req.body.id; //pega o valor passado através do parâmetro id e atribui a variável item. 

    users.splice(item, 1);//este método permite adicionar ou remover um item do vetor em uma dada posição. 
    //res.render('pages/cadastro',{users:users});

    console.log("Elementos cadastrados: "+users);

    res.sendStatus(200);//envia mensagem 200 significando que as modificacoes foram ok
    //res.json({"nome": "patrick", "idade": "20"});
});

//--------------------------------------------------------------------------------------------



module.exports = router;
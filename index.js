const express = require("express");
const app = express();
const routes = require("./routes");
const faker  = require('faker');
const expressLayouts = require("express-ejs-layouts");
//const bodyParser = require('body-parser');
const PORT = 3030;
const ENDERECO = "localhost";
const {v4 : gerarIdAleatorio} = require("uuid");

global.users = [
     {
          codigoID: gerarIdAleatorio(),
          name: faker.name.firstName()+" "+faker.name.lastName(),
          address: faker.address.streetName()+"/ "+faker.address.city()+", "+"California ",
          email: faker.internet.email(),
          age: 22,
          height: 1.70,
          vote: true
     },
     {
          codigoID: gerarIdAleatorio(),
          name: faker.name.firstName()+" "+faker.name.lastName(),
          address: faker.address.streetName()+"/ "+faker.address.city()+", "+faker.address.state(),
          email: faker.internet.email(),
          age: 32,
          height: 1.60,
          vote: true
     },
     {
          codigoID: gerarIdAleatorio(),
          name: faker.name.firstName()+" "+faker.name.lastName(),
          address: faker.address.streetName()+"/ "+faker.address.city()+", "+faker.address.state(),
          email: faker.internet.email(),
          age: 17,
          height: 1.75,
          vote: true
     },
]


//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine', 'ejs');//definindo o tipo Template Engine à ser utilizado para a saída dos dados
app.set('views', './views');//indicando o local dos módulos .ejs que serão renderizados
//app.use(expressLayouts);
//app.use(express.static(__dirname + './public'));

// middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true})); //ESSE COMANDO NÃO FUNCIONA! USE ESSES 2 ABAIXO CASO QUEIRA CHAMAR AS ROTAS ATRAVÉS DO OBJETO "app" E NÃO DE ATRAVÉS DO OBJETO RETORNADO PELA FUNÇÃO "Router()", COMO NO ARQUIVO "routes.js" 
/*
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
*/


app.use(express.static(__dirname+"public"));

app.use(express.urlencoded({extended: true}));//FUNDAMENTAL PARA QUE O JSON SEJA CONVERTIDO EM OBJETO QUANDO CHEGAR NAS ROTAS DO SERVIDOR

//criando e usando rotas simples que estão no arquivo "routes.js"
app.use('/', routes);

//criando um servidor simples com o NodeJS e o Express
app.listen('3030', ()=>{console.log("A mágica acontece em localhost:3030")});
/*
const server = app.listen(PORT, ENDERECO, ()=>{
     let end = server.address().address;
     let fin = server.address().port;
     console.log("A mágica ocorre no endereço "+end+" com porta nº: "+fin+"");
});
*/


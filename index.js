const express = require("express");
const routes = require("./routes");
const faker  = require('faker');
const app = express();
const expressLayouts = require("express-ejs-layouts");
const PORT = 3030;
const ENDERECO = "localhost";

global.users = [
     {
          name: faker.name.firstName()+" "+faker.name.lastName(),
          address: faker.address.streetName()+"/ "+faker.address.city()+", "+"California ",
          email: faker.internet.email(),
          age: 22,
          height: 1.70,
          vote: true
     },
     {
          name: faker.name.firstName()+" "+faker.name.lastName(),
          address: faker.address.streetName()+"/ "+faker.address.city()+", "+faker.address.state(),
          email: faker.internet.email(),
          age: 32,
          height: 1.60,
          vote: true
     },
     {
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

//criando e usando rotas simples que estão no arquivo "routes.js"
app.use('/', routes);

//criando um servidor simples com o NodeJS e o Express
const server = app.listen(PORT, ENDERECO, ()=>{
     let end = server.address().address;
     let fin = server.address().port;
     console.log("A mágica ocorre no endereço "+end+" com porta nº: "+fin+"");
});
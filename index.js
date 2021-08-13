const express = require("express");
const routes = require("./routes");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const PORT = 3030;
const ENDERECO = "localhost";

global.users = [
     {
          name: "Marcos Patrick",
          address: "Rua _nome_da_rua_",
          email: "eduardo_de_tal@gmail.com",
          age: 22,
          height: 1.70,
          vote: true
     },
     {
          name: "Feranda de Lima ",
          address: "Rua _nome_da_rua_",
          email: "fernanda_de_tal@gmail.com",
          age: 32,
          height: 1.60,
          vote: true
     },
     {
          name: "Jessica Sousa",
          address: "Rua _nome_da_rua_",
          email: "JessicaSousa_de_tal@gmail.com",
          age: 17,
          height: 1.75,
          vote: true
     },
]


//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine', 'ejs');//definindo o tipo Template Engine à ser utilizado para a saída dos dados
app.set('views', './views');//indicando o local dos módulos .ejs que serão renderizados
app.use(expressLayouts);


//criando e usando rotas simples que estão no arquivo "routes.js"
app.use('/', routes);

//criando um servidor simples com o NodeJS e o Express
const server = app.listen(PORT, ENDERECO, ()=>{
     let end = server.address().address;
     let fin = server.address().port;
     console.log("Server rodando no endereço "+end+" e porta: "+fin+"");
});
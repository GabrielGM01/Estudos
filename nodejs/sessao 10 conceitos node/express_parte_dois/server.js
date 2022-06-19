const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET   PUT     DELETE


app.use(express.urlencoded({extended:true})); //para tratar os req.body

app.get('/', (req,res)=>{
    res.send('Hello world');
});

app.post('/', (req,res)=>{
    res.send(req.body);
});

app.get('/contato', (req,res)=>{
   res.send('Obrigado por entrar em contato com a gente'); 
});

app.get('/testes/:idUsuarios?/:nome?',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
});

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});


// node server.js
// npm install nodemon --save-dev
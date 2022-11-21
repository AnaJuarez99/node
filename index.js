const express = require('express');
const app = express();

const ruta = require('path');
app.get('/', function(req,res){
    res.sendFile(ruta.join(__dirname, 'node_html/index.html'));
});

app.get('/hola', function(req,res){
    res.send(`<h1>${req.query.name}</h1>`);
});

app.listen(9090);
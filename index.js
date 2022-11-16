const express = require('express');
const app = express();

const ruta = require('path');
app.get('/', function(req,res){
    res.sendFile(ruta.join(__dirname, 'node_html/index.html'));
});

app.listen(9090);
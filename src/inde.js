const express = require('express');
//const pool require('mysql');

const port = 8000;

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res)=>{
    res.send('response');
});
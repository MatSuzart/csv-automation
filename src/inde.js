const express = require('express');
const csv = require('csv-parse');
const fs = require('fs');
//const pool require('mysql');

const app = express();

const port = 8000;

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res)=>{
    res.send('response');
});
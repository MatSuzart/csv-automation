const express = require('express');
const csv = require('csv-parse');
const fs = require('fs');
const mysql = require('mysql2/promise');


const app = express();

const port = 8000;

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res)=>{
    res.send('response');
});

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
  });
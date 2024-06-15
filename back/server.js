'user strict';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

const { PORT } = process.env;

app.get('/', (req, res) => {
    res.send('Hola desde PFB');
});

app.get('/login', (req, res) => {
    res.status(201).send('Login!!!');
});

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});

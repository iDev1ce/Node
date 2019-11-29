const express = require('express');

const routes = express.Router();

const connection = require('../config/database');

const clients = [
    {
        id: 312567,
        nome: 'Juan Riquelme',
        status: 'Online'
    },
    {
        id: 3128312,
        nome: 'Daniel Bastos',
        status: 'Offline'
    },
    {
        id: 3391283,
        produto: 'Guilherme Souza',
        status: 'Online'
    },
    {
        id: 69,
        nome: 'Belle Delphine',
        telefone: '6969-6969',
        status: 'Disponível para serviço'
    }
];

routes.get('/', (req, res) => {
    const sql = "SELECT * FROM marcas";
    connection.query(sql, (err, results) => {
        if (err)
            res.status(500).json({ status: 'Internal Server Error', err });
        else 
            res.status(201).json({ status: 'Ok', data: results });
    });
});

routes.get('/', (req, res) => {
    return res.json({ status: '200', data: clients });
});

routes.get('/:id', (req, res) => {
    const { id } = req.params;
    return res.json({ status: '200', data: clients[id - 1]});
});

module.exports = routes;
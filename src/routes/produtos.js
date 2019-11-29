const express = require('express');

const routes = express.Router();

const db = [
    {
        id: 32,
        produto: 'mouse',
        quantidade: 500
    },
    {
        id: 12,
        produto: 'teclado',
        quantidade: 0
    },
    {
        id: 31,
        produto: 'cadeira gamer',
        quantidade: 2
    },
    {
        id: 69,
        produto: 'agua de banho - Belle Delphine edição especial',
        quantidade: 69
    }
];

routes.get('/', (req, res) => {
    return res.json({ status: '200', data: db });
});

routes.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ status: '200', data: db[id - 1] });
});

routes.post('/', (req, res) => {
    const data = req.body;
    res.status(201).json({ status: 'Cadastro realizado com sucesso!', data: data });
});

routes.delete('/:id', (req, res) => {
    res.status(200).json({ status: 'Registro excluído com sucesso!' });
});

module.exports = routes;
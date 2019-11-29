const express = require('express');
const app = express();

const produtosRoute = require('./routes/produtos');
const clientesRoute = require('./routes/clientes');

app.get('/', (req, res) => {
    return res.json({ message: 'Hello world', status: '200' });
});

app.use(express.json());
app.use('/produtos', produtosRoute);
app.use('/clientes', clientesRoute);

app.listen(3000, () => {
    console.log('... connected');
});
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const rotaEspecies = require('./api/species');
const rotaNaves = require('./api/starships');
const rotaPersonagens = require('./api/people');
const rotaPlanetas = require('./api/planets');
const rotaViagens = require('./api/viagens');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/species', rotaEspecies);
app.use('/starships', rotaNaves);
app.use('/people', rotaPersonagens);
app.use('/planets', rotaPlanetas);
app.use('/viagens', rotaViagens);

app.use((req, res, next) => {
    const erro = new Error('Diretório não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status  || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;
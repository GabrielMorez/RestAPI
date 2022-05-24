const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const url = 'https://swapi.dev/api/planets/'

router.get('/', function(req, res, next) {
    fetch(url)
    .then(resposta => resposta.json())
    .then(resposta => console.log(resposta))
    res.end();
    });

router.get('/:id_planets', function(req, res, next) {
        const id = req.params.id_planets
        fetch(url + id)
        .then(resposta => resposta.json())
        .then(resposta => console.log(resposta))
        res.end();
    });

module.exports = router;
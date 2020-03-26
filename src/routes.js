const express = require('express')
const routes = express.Router()


routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Rian Tavares'
    })
})

module.exports = routes;
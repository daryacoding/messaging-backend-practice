require('dotenv').config()
require('./config/database')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(logger('dev'))

app.get('api/test', (req, res) => {
    res.json({'eureka': 'you have found it'})
})

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})
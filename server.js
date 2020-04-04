require('./config')
const express = require('express')
const { join } = require('path')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connection.once('open', () => app.listen(PORT))

const {model, Schema} = require('mongoose')

const Project = require('./Project.js')(model, Schema)

module.exports = { Project }
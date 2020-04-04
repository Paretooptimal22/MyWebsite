module.exports = app => {
  require('./htmlRoutes.js')(app)
  require('./projectRoutes.js')(app)
}
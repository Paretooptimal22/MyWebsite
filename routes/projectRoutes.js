const { Project } = require('../Models')

module.exports = app => {

  // GET ALL PROJECTS
  app.get('/projects', (req, res) => {
    Project.find()
      .then(projects => res.json(projects))
      .catch(e => console.error(e))
  })

  // GET ONE PROJECT
  app.get('/projects/:id', (req, res) => {
    Project.find({ _id: req.params.id })
      .then(project => res.json(project))
      .catch(e => console.error(e))
  })

  // POST ONE PROJECT
  app.post('/projects/:id', (req, res) => {
    Project.create(req.body)
      .then(project => res.json(project))
      .catch(e => console.error(e))
  })

  // UPDATE ONE PROJECT
  app.put('/projects/:id', (req, res) => {
    Project.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE ONE PROJECT
  app.delete('/projects/:id', (req, res) => {
    Project.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
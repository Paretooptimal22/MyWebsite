module.exports = (model, Schema) => {
  const Project = new Schema ({
    name: String,
    description: String,
    isWebApp: {
      type: Boolean,
      default: true
    }
  })

  return model('Project', Project)
}
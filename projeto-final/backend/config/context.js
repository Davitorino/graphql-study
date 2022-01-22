module.exports = async ({ req }) => {
  // In development
  await require('./simularUsuarioLogado')(req)

 const auth = req.headers.authorization
}
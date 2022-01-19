const db = require('../config/db')

// excluir por id
// db('usuarios').where({ id: 3 })
//   .delete()
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// excluir tudo
db('usuarios')
  .delete()
  .then(res => console.log(res))
  .finally(() => db.destroy())
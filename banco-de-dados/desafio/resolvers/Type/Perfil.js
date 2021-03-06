const db = require('../../config/db')

module.exports = {
  usuarios(perfil) {
   return db('usuarios')
    .join(
      'usuarios_perfis',
      'usuario.id',
      'usuarios_perfis.usuario_id'
    )
    .where({ perfil_id: perfil.id })
  }
}
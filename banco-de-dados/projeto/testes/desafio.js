const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
  const usuario = { nome, email, senha }
  
  const exists = await db('usuarios')
    .where({ email }).first()

  if (exists) {
    await db('usuarios').where({ email }).update(usuario)
  } else {
    await db('usuarios').insert(usuario)
  }

  return db('usuarios').where({ email }).first()
}

async function salvarPerfil(nome, rotulo) {
  const perfil = { nome, rotulo }
  
  const exists = await db('perfis')
    .where({ nome }).first()

  if (exists) {
    await db('perfis').where({ nome }).update(perfil)
  } else {
    await db('perfis').insert(perfil)
  }

  return db('perfis').where({ nome }).first()
}

async function adicionarPerfis(usuario, ...perfis) {
  await db('usuarios_perfis')
    .where({ usuario_id: usuario.id })
    .delete()

  for (perfil of perfis) {
    await db('usuarios_perfis')
    .insert({
      usuario_id: usuario.id,
      perfil_id: perfil.id
    })
  }
}

async function executar() {
  const usuario = await salvarUsuario('Ana',
    'ana@empresa.com.br', '123456')
  const perfilA = await salvarPerfil('rh', 'Pessoal')
  const perfilB = await salvarPerfil('fin', 'Financeiro')

  console.log(usuario)
  console.log(perfilA)
  console.log(perfilB)

  await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
  .catch(err => console.log(err))
  .finally(() => db.destroy())
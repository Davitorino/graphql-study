let id = 1
function proximoId() {
  return id++
}

const usuarios = [{
  id: proximoId(),
  nome: 'João Silva',
  email:'jsilva@zemail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: proximoId(),
  nome: 'Rafael Junior',
  email: 'rafajun@wemail.com',
  idade: 31,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: proximoId(),
  nome: 'Daniela Smith',
  email: 'danismi@umail.com',
  idade: 24,
  perfil_id: 1,
  status: 'BLOQUEADO'
}]

id = 1

const perfis = [{
  id: proximoId(),
  tipo: 'Comum'
}, {
  id: proximoId(),
  tipo: 'Administrador'
}]

module.exports = { usuarios, perfis, proximoId }
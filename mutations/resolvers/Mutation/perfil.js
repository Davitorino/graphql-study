const { perfis, proximoId } =
  require('../../data/db')

function indicePerfil(filtro) {
  if(!filtro) return -1
  const { id, tipo } = filtro
  
  if(id) { 
    return perfis.findIndex(p => p.id === id)
  } else if(tipo) {
    return perfis.findIndex(p => p.tipo === tipo)
  }
  return -1
}

module.exports = {
  novoPerfil(_, { tipo }) {
    const perfilExistente = perfis
      .some(p => p.tipo === tipo)

    if(perfilExistente) {
      throw new Error('Perfil já cadastrado')
    }
    
    const novo = { 
      id: proximoId(),
      tipo 
    }

    perfis.push(novo)
    return novo
  },
  excluirPerfil(_, { filtro }) {
    const i = indicePerfil(filtro)
    if(i < 0) return null

    const excluidos = perfis.splice(i, 1)
    return excluidos ? excluidos[0] : null
  },
  alterarPerfil(_, { filtro, tipo }) {
    const i = indicePerfil(filtro)
    if(i < 0) return null

    const perfil = {
      ...perfis[i],
      tipo
    }

    perfis.splice(i, 1, perfil)
    return perfil
  }
}
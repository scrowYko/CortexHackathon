const listaRegistros = []

function novoRegistro(registro){
    listaRegistros.push(registro)
    return listaRegistros
}

export default {novoRegistro}
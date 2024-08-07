const listaRegistros = []

function novoRegistro(registro){
    listaRegistros.push(registro)

    let saida = listaRegistros.toString
    return saida
}

novoRegistro('Hoje fui a academia')

export default {novoRegistro}
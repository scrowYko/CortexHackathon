function criarRegistro(registros, novoRegistro) {
    registros.push(novoRegistro);
    return registros;
}

function alterarRegistro(registros, indice, registroAtualizado) {
    if (indice >= 0 && indice < registros.length) {
        registros[indice] = registroAtualizado;
    } else {
        console.log("Índice inválido");
    }
    return registros;
}


function deletarRegistro(registros, indice) {
    if (indice >= 0 && indice < registros.length) {
        registros.splice(indice, 1);
    } else {
        console.log("Índice inválido");
    }
    return registros;
}


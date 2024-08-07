const novoRegistro = require('./functionsTest')

test('Teste para ver se registros estão funcionando', () => {
    const registro = 'Hoje fui a academia'
    const saida = 'Hoje fui a academia'
    expext(novoRegistro(registro).toEqual(saida))
})
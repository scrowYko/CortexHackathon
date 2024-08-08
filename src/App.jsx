import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Registros do Dia</h1>
    <input type="text" id="novoRegistro" placeholder="Digite seu registro"/>
    <button onclick="adicionarRegistro()">Adicionar</button>
    <ul id="listaRegistros"></ul>
    </>
  )
}

export default App

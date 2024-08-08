import { React, useState } from 'react'
import './App.css'

function App() {
  const [registros, setRegistros] = useState([]);
  const [novoRegistro, setNovoRegistro] = useState('');


  const adicionarRegistro = () => {
    setRegistros([...registros, novoRegistro]);
    setNovoRegistro('');
  };

  return (
    <>
      <h1>Registros do Dia</h1>
      <input
        type="text"
        value={novoRegistro}
        onChange={(e) => setNovoRegistro(e.target.value)}
        placeholder="Digite seu registro"
      />
      <button onClick={adicionarRegistro}>Adicionar</button>
      <ul id="listaRegistros">
        {registros.map((registro, index) => (
          <li key={index}>{registro}</li>
        ))}
      </ul>
    </>
  )
}

export default App

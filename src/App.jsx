import { React, useState } from 'react'
import './App.css'

function App() {
  const [registros, setRegistros] = useState([]);
  const [novoRegistro, setNovoRegistro] = useState('');
  const [perguntaQuiz, setPerguntaQuiz] = useState('');
  const [respostaCorreta, setRespostaCorreta] = useState(false);


  const adicionarRegistro = () => {
    setRegistros([...registros, novoRegistro]);
    setNovoRegistro('');
  };

  const alterarRegistro = (indice, novoValor) => {
    const novosRegistros = [...registros];
    if (indice >= 0 && indice < novosRegistros.length) {
      if (novoValor.trim() === '') {
        alert("O novo valor não pode estar vazio!");
      } else {
        novosRegistros[indice] = novoValor;
        setRegistros(novosRegistros);
      }
    } else {
      console.log("Índice inválido");
    }
  };

  const apagarRegistro = (indice) => {
    const novosRegistros = [...registros];
    if (indice >= 0 && indice < novosRegistros.length) {
      novosRegistros.splice(indice, 1);
      setRegistros(novosRegistros);
    } else {
      console.log("Índice inválido");
    }
  };

  const exibirPergunta = () => {
    // Defina sua pergunta do quiz aqui
    setPerguntaQuiz(`Qual destes você fez primeiro hoje? ${registros[1]}`); // Exemplo de pergunta

    // Defina a resposta correta (true para certo, false para errado)
    setRespostaCorreta(true); // Exemplo de resposta correta
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
      <ul id="listaRegistros" className='registros'>
        {registros.map((registro, index) => (
          <li key={index} className='registro'>
            {registro}
            <button onClick={() => alterarRegistro(index, prompt("Digite o novo valor:"))} >

              <img src="./pincel-grande.png" alt="Editar" /></button> <button onClick={() => apagarRegistro(index)}>
              Apagar
            </button></li>
        ))}
      </ul>

      <button onClick={exibirPergunta}>Exibir Pergunta</button>
      {perguntaQuiz && (
        <div>
          <p>{perguntaQuiz}</p>
          <button onClick={() => alert(respostaCorreta ? "Certo!" : "Errado!")}>
            aaaa
          </button>
          <button onClick={() => alert(respostaCorreta ? "Errado!" : "Certo!")}>
            bbbb
          </button>
        </div>)
      }
    </>
  )
}

export default App

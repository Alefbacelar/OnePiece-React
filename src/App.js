import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Marinheiros',
      corPrimaria: '#2A59A8',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Piratas',
      corPrimaria: '#000000',
      corSecundaria: '#6B6762'
    },    
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    debugger
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        personagens={personagens.filter(personagem => personagem.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;

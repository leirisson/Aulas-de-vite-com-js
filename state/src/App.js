import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState("Leirisson")
  const [numero, setNumnero] = useState(0)

  const change = () =>{
    setNumnero(numero + 2)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hooks Com State</h1>
       <h2>Meu nome é: {name}</h2>
       <input type='text' value={name} onChange= {evento => setName(evento.target.value)}/>
       <div>
        <p>Número é: {numero} </p>
        <button onClick={change}> Mudar número </button>
       </div>
      </header>
    </div>
  );
}

export default App;

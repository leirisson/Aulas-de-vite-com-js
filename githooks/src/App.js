import './App.css';
import {useState} from "react"

function App() {
  const [repositorio, setRepositorio] = useState([
  {id:1, nome:"repo-1"},
  {id:1, nome:"repo-2"},
  {id:1, nome:"repo-3"},
  {id:1, nome:"repo-4"}
  ])
  return (
    <div className="App">
       <ul>
      {repositorio.map(repo => (<li key={repo.id}>{repo.name}</li>))}
    </ul>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {

  const [numAleatorio, setNumAleatorio] = useState(0);
  const [numIngresado, setNumIngresado] = useState(0);
  const [respuesta, setRespuesta] = useState('');

  const start = () => {
    const aux = Math.floor(Math.random()*(11));
    setNumAleatorio(aux);
  }

  const adivina = (e) => {
    e.preventDefault()
    if(numIngresado == numAleatorio){
      setRespuesta('Adivinaste!')
    }else {
      setRespuesta('Sigue intentando')
    }
  }

  console.log(numAleatorio)
  console.log(numIngresado)

  return (
    <div className="App">
      <form onSubmit={adivina}>
          <label>Ingresa un número del 1 al 10: </label>
          <input value={numIngresado} onChange={(e) => setNumIngresado(e.target.value)}/>
          <button onClick={start}>Empezar</button>
          <p>{respuesta}</p>
      </form>
    </div>
  );
}

export default App;

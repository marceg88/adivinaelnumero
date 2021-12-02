import React, { useState } from 'react';
import './App.css';

function App() {
  const [ingreso, setIngreso] = useState(0);
  const [numAleatorio, setNumAleatorio] = useState(0)
  const [estado, setEstado] = useState(false) //Estado del boton
  const [resultado, setResultado] = useState(false)

  const empezar = () => {
    setNumAleatorio(Math.ceil(Math.random() * 10));
    setEstado(true);
  };
  console.log(numAleatorio)
  
  const enviar = (e) => {
    e.preventDefault()

    if(+ingreso === +numAleatorio){
      setResultado("Adivinaste!")
      setEstado(false)
    }else{
      setResultado("Sigue intentando.")
    }
  }
  
  
 
    return (
      <div className = "App">
        <form onSubmit={enviar}>
          <input value={ingreso} onChange={(e) => setIngreso(e.target.value)}/>
          <button type="button" onClick={empezar}>Empezar el juego</button>
        </form>
        
      </div>
    );

    
}

export default App;

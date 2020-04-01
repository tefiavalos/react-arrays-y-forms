import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'


const App = () => {

  const ElementoDeLaLista = ({ tarea, i }) => {
    return (
      <li className={tarea.completado ? "completada" : ""} key={i}>
        {tarea.nombre}
        <button onClick={() => handleEraseCLick(i)}>X</button>
        <button onClick={() => handleCompleteClick(i)}>{tarea.completado === false ? `Marcar como completado` : `Marcar como no completado`}</button>

      </li>)
  }
  
  const handleEraseCLick = indiceTareaABorrar => {
    const tareasFiltradas = tareas.filter((tarea, i) => i !== indiceTareaABorrar)
    setTareas(tareasFiltradas)
  }

  const handleCompleteClick = indiceTareaACompletar => {
    const tareasModificadas = tareas.map((tarea, i) => {
      tarea.completado = i === indiceTareaACompletar ? !tarea.completado : tarea.completado
      return tarea
    })
    setTareas(tareasModificadas)
  }

  const [tareas, setTareas] = useState([
    { nombre: "Manteca", completado: false },
  ])
  let [nuevaTarea, setNuevaTarea] = useState([{}])

  let funcionDelPadre = infoDelHijo => {
    const objeto = {
      nombre: infoDelHijo,
      completado: false,
    }
    setNuevaTarea(objeto)
  }
  
  let funcionDelPadreOnSubmit = () =>{
    let tareaNueva = [...tareas, nuevaTarea]
    setTareas(tareaNueva)
   
  }
  

  return (
    <div className="main">
      <ul>
        {tareas.map((tarea, i) =>
          <ElementoDeLaLista key={i} tarea={tarea} i={i}></ElementoDeLaLista>)}
      </ul>
          <Form funcionDelPadre={funcionDelPadre} funcionDelPadreOnSubmit={funcionDelPadreOnSubmit}/>
    </div>
  );
}

export default App;

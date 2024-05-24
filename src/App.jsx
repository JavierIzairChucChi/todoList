import { useState } from "react";

import './App.css';

export default function App() {

  const [tareas, setTareas] = useState([]); //Un arreglo vacio para almacenar las tareas
  
  const agregarTarea = () => {
    const entradaTarea = document.querySelector('input');
    if (entradaTarea.value.trim()) 
    {
      const nuevaTarea = { id: crypto.randomUUID(), tarea: entradaTarea.value, completada: false };
      setTareas([nuevaTarea, ...tareas]);
      entradaTarea.value = ''; // limpia el contenido después de agregar la tarea
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const estadoTareaCompletada = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea
    ));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text" placeholder="Introduce una tarea" />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            <p 
              onClick={() => estadoTareaCompletada(tarea.id)} 
              className={tarea.completada ? 'completada' : ''}
            >
              {tarea.tarea}
            </p>
            <button onClick={() => eliminarTarea(tarea.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

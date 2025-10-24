
export const List = () => {

const tasks = [
  { id: 1, title:"tarea 1",completed: false},
  { id: 2, title:"tarea 2",completed: true},
  { id: 3, title:"alan  3",completed: false},
  { id: 4, title:"tarea 4",completed: true}


]    
  return (
    <>  
     <h1>Sección de tareas</h1>
    <ul>
      {tasks.map( (task) => (
        <li>{task.title}</li>
      ))}
    </ul>

    </>
  )
}

import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function ButtonDelete({task}) {
    const { deleteTask} = useContext(TaskContext)

    return (
        <button 
        className="bg-red-500 px-5 py-1 rounded-md mt-5 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}>
            Eliminar tarea
        </button>
  )
}

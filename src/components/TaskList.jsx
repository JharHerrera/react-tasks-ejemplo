import { ButtonDelete } from "./ButtonDelete";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function TaskList(){
    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0){
        return(<h1 className="text-white font-bold text-7xl text-center">No se encuentran tereas disponibles</h1>)
    } 


    return (
        
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <div className="
                bg-gray-800
                text-white 
                rounded-md 
                p-3
                text-center" 
                key={task.id}>
                    <h1 className="text-xl font-bold capitalize">{task.title}</h1>
                    <p className="text-gray-400">{task.description}</p>

                    <ButtonDelete task={task}/>
                </div>
            ))}
        </div>
    )
}
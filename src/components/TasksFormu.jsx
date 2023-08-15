import {useState, useContext} from "react";
import { TaskContext } from "../context/TaskContext";

export function TasksFormu(){
    const {createTask} = useContext(TaskContext)
    
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle("");
        setDescription("");
    };

    return(
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-10 ">
            <h1 className="text-white font-bold text-2xl mb-3">Crea tu nueva tarea</h1>
            <input placeholder="Ingresa una nueva tarea"
                onChange={ (e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                className="bg-gray-200 text-black p-3 w-full mb-2"
            />
            <textarea placeholder="Descripcion de la nueva tarea"
                onChange={e => setDescription(e.target.value)}
                value={description}
                className="bg-gray-100 text-black p-3 w-full mb-2">
            </textarea>
            <button className="bg-indigo-600 px-10 py-3 rounded-md text-white font-bold">
                Guardar
            </button>
        </form>
        </div>
    );
};
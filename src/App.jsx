import { useState } from 'react'
import { motion } from "motion/react"


function App() {


  const [tasks, setTasks] = useState([])


  const handleAddTask = () => {
    const input = document.querySelector("input")
    if (input.value.trim() !== "")
    {
      setTasks([...tasks , input.value.trim()])
      input.value = ""
    }
  }


  const handleDeleteTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  
  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto mt-10 gap-4 max-h-full">
        <div className="text-6xl font-bold">TODO APP</div>
        <div>
          <input placeholder="Add a new task..." maxLength="150" className="bg-white text-black placeholder:text-gray-500 border border-gray-600 focus:outline-none p-3 rounded-lg"></input>
          <motion.button 
            whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}


          className="p-3 bg-blue-400 mx-2 hover:bg-blue-600 cursor-pointer rounded-lg" onClick={handleAddTask}>Add Task</motion.button>
        </div>
        <div>
          <ul className="flex flex-col gap-2 min-w-7xl">
            {tasks.map((task, index) => (
              <motion.li key={index} className="bg-white/80 text-black p-3 rounded-lg overflow-hidden flex justify-between items-center truncate "
              
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}

            
              
              
              >
                {task}
                <button className="ml-2 text-white border-2 border-red-400 bg-red-500 hover:bg-red-400 w-8 h-8 rounded-lg cursor-pointer" onClick={() => handleDeleteTask(index)}>
                  X
                </button>
              </motion.li>
            ))}
            
          </ul>
          
        </div>
        <div className="text-gray-500 text-sm">
          Basic TODO App made with React and TailwindCSS. Made by <a href="https://github.com/ElmarRamazanov" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Elmar Ramazanov</a>
        </div>
      </div>
         
    </>
  )
}

export default App

import {TaskList} from './components/TaskList.jsx'
import {TasksFormu} from './components/TasksFormu.jsx'

import {useState, useEffect} from 'react'

export function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-6'>
        <TasksFormu/>
        <TaskList/>
      </div>
    </main>
  )
}


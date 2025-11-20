import React from 'react'

import TaskForm from './Components/TaskForm'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'
import { useState } from 'react';

export default function App() {
  const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(task);
  }
  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <TaskForm addTask = {addTask}/>
      <Tasklist />
      <ProgressTracker />
      <button>clear All Tasks</button>
    </div>
  )
}

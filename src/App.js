import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (taskId, newName) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, name: newName } : task));
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default App;

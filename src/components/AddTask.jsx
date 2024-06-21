import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="add" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;

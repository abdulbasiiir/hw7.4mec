import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleUpdateTask = () => {
    updateTask(task.id, newName);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="save" onClick={handleUpdateTask}>
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button className="cancel" onClick={() => setIsEditing(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      ) : (
        <div>
          <span>{task.name}</span>
          <button className="edit" onClick={() => setIsEditing(true)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="delete" onClick={() => deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;

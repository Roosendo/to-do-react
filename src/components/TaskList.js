import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';

function TaskList() {
  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTask(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTask(updatedTasks);
  };

  const doTask = id => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done;
      }

      return task;
    });

    setTask(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              deleteTask={deleteTask}
              doTask={doTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;
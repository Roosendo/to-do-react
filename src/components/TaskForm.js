import { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {
  const [input, setInput] = useState('');

  const handleChanging = e => {
    setInput(e.target.value);
  };

  const handleSending = e => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    };

    props.onSubmit(newTask);
  };

  return (
    <form
      className='task-form'
      onSubmit={handleSending}>
      <input
        className='task-input'
        type='text'
        placeholder='Make a new to-do ...'
        name='text'
        onChange={handleChanging}
      />
      <button className='task-button'>
        Add task
      </button>
    </form>
  );
}

export default TaskForm;
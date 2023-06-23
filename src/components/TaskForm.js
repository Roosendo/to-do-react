import '../stylesheets/TaskForm.css';

function TaskForm(props) {
  return (
    <form className='task-form'>
      <input
        className='task-input'
        type='text'
        placeholder='Make a new to-do ...'
        name='text'
      />
      <button className='task-button'>
        Add to-do
      </button>
    </form>
  );
}

export default TaskForm;
import '../stylesheets/Task.css';
import { AiOutlineCloseSquare } from 'react-icons/ai';

function Task({ id, text, done, doTask, deleteTask }) {
  return (
    <div className={done ? 'task-container done' : 'task-container'}>
      <div 
        className='task-text'
        onClick={() => doTask(id)}>
        {text}
      </div>
      <div
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseSquare className='task-icon' />
      </div>
    </div>
  );
}

export default Task;
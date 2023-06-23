import '../stylesheets/Task.css';
import { AiOutlineCloseSquare } from "react-icons/ai";

function Task({ text, done }) {
  return (
    <div className={done ? 'task-container done' : 'task-container'}>
      <div className='task-text'>
        {text}
      </div>
      <div>
        <AiOutlineCloseSquare className='task-icon' />
      </div>
    </div>
  );
}

export default Task;
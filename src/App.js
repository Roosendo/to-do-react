import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className='todo-app'>
      <Logo />
      <div className='task-list-main'>
        <h1>My to-do's</h1>
      </div>
    </div>
  );
}

export default App;
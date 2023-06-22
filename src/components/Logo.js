import '../stylesheets/Logo.css';
import Logofcc from '../imgs/fcc-logo.png';

function Logo() {
  return (
    <div className='logo-container'>
      <img 
        src={Logofcc}
        className='logo' />
    </div>
  );
}

export default Logo;
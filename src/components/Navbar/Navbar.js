import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? '1.4rem' : '',
      color: isActive ? '#f08080' : '#ccc',
    };
  };
  return (
    <div className={styles.Navbar}>
      <NavLink to={'/'}>Flowmodoro</NavLink>
      <div className={styles.right}>
        <NavLink to={'/reports'} style={activeStyle}>
          Reports
        </NavLink>
        <NavLink to={'/setting'} style={activeStyle}>
          Setting
        </NavLink>
        <NavLink to={'/login'} style={activeStyle}>
          Login
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;

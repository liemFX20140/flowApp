import Clock from './components/Clock/Clock';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div style={{ width: '80%', margin: '1rem auto' }}>
      <Navbar></Navbar>
      <Clock duration={1000}></Clock>
    </div>
  );
}

export default App;

import './App.css';
import Todolist from './Todolist';
import Home from './Home';
import About from './About';
import Example from './example';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
      {/* <Todolist/> */}
      <Home/>
      <About/>
      <Example/>
      <Demo/>
    </div>
  );
}

export default App;

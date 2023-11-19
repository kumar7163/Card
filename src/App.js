import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card';
import Classeventhandling from './components/Classeventhandling';
import FuncEventHandling from './components/FuncEventHandling';
import ApiRendering from './components/ApiRendering';

function App() {
  return (
    <div className="App">
      {/* <Card /> */}
      <ApiRendering />
      {/*<Classeventhandling /> */}
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import header from './assets/img/bg_banner.png';
import RandM_app from './components/RandM_app';

function App() {
  return (
    <div className="App">
     <header>
      <img src={header} alt=""/>
     </header>
     <RandM_app />
    </div>
  );
}

export default App;

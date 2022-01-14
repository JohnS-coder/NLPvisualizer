// import logo from './logo.svg';
// import './App.css';
import  AppBar  from './components/AppBar';
import TestnLP2 from './components/test2';
import TestnLP from './components/test';
import NLPvisualizer from './components/NLPvisualizer';
import data from './components/data.json'

function App() {
  return (
    <div className="App">
      <AppBar />
      <header className="App-header">
        <p>--------------------------------</p>
        <div style={{border:"2px solid red",display:"flex",flexWrap:"wrap"}}>
        <NLPvisualizer  data={data}/>
        </div>
        <p>--------------------------------</p>
      </header>
    </div>
  );
}

export default App;

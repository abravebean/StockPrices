import Main from './pages/Main';
import About from "./pages/About";
import Stock from "./pages/Stock"; 
import Currencies from './pages/Currencies';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
  <Route path='/' element={<Main />} />
  <Route path='/stocks' element={<Currencies />}/>
  <Route path='/stocks/:symbol' element={<Stock />} />
  <Route path="/about" element={<About />} />
</Routes>

     
    </div>
  );
}

export default App;

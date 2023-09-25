import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pet from './pages/Pet';

function App() {



  return (
    <div className='App'>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pet />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;

import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Europool Actor Management Demo</h2>
        <Routes>
          <Route exact path='/' element={<Read />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/update' component={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
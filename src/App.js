import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './Components/NavBar/NavBar';

import './App.css';


function App() {
  return (
    <div>
      <div>
        <NavBar sticky='top'/>
      </div>
      <div>
        table will go here
      </div>
    </div>
  );
}

export default App;

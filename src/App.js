import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    getAllSongs();
  }, [])

  async function getAllSongs(){
    try {
      let response = await axios.get('http://127.0.0.1:8000/music/');
      setSongs(response.data)
    } catch (err) {
      console.log("Error in getAllSongs function in DisplayMusic.jsx file")
    }
  }

  return (
    <div>
      <div>
        <NavBar sticky='top'/>
      </div>
      <div>
        <DisplayMusic songs={songs} />
      </div>
    </div>
  );
}

export default App;

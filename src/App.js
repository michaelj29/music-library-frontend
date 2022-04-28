import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState('')

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
    <div className='container-fluid'>
      <div className='row'>
        <NavBar className='navbar' fixed="top" setSearch={setSearch}/>
      </div>
      <div className='row'>
        <DisplayMusic className='table' songs={songs} search={search}/>
      </div>
    </div>
  );
}

export default App;

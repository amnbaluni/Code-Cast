import React from 'react'
import { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();
  const[roomId, setRoomId] = useState();
  const[username, setUsername] = useState();
  const createNewRoom = (e) => {
     e.preventDefault();
     const id = uuidV4();
     setRoomId(id);
     toast.success('Created new room');
  };

  const joinRoom = () => {
      if(!roomId || !username){
        toast.error('Please enter a username and Room ID');
        return;
      }
      navigate(`/editor/${roomId}`, {
        state:{
          username,
        }
      })
  }

  const handleInputEnter = (e) =>{
    if(e.code === 'Enter'){
      joinRoom();
    }
  }
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
          <img src="/logo-main.png" alt="main-logo" />
          <h4 className='mainLabel'>Paste your invitation Room ID</h4>
          <div className='inputGroup'>
            <input type="text" className='inputBox' placeholder='ROOM ID' value={roomId} onChange={(e)=> setRoomId(e.target.value)} onKeyUp={handleInputEnter}/>
            <input type="text" className='inputBox' placeholder='USERNAME' value={username} onChange={(e)=> setUsername(e.target.value)} onKeyUp={handleInputEnter}/>
            <button className='btn joinBtn' onClick={joinRoom}>Code</button>
            <span className='createInfo'>
                If you don't have an invite then create &nbsp;
                <a onClick={createNewRoom} href="" className='createNewBtn'>
                  New Room
                </a>
            </span>
          </div>
      </div>
      <footer>
        <h4>
            Built with 💛 by <a href="https://www.linkedin.com/in/aman-baluni-03a440230">Aman Baluni</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home
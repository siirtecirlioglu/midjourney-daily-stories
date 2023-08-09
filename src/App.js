import React, { useEffect, useState } from 'react';
import './App.css';
import Stories from './pages/Stories';
import logo from './logo.png'

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/stories.json`)
      .then(data => data.json())
      .then(data => setStories(data))
  }, []);

  return (
    <div className='h-screen w-screen flex flex-col'>
      <div className='flex gap-2 bg-sky-800 items-center'>
        <img src={logo} className='w-16 h-16' alt="logo"/>
        <div className='text-xl text-slate-200 font-bold'>BunBun's Stories</div>
      </div>
      <div className='flex-grow p-4 overflow-auto'>
        <Stories stories={stories}/>
      </div>
    </div>

  );
}

export default App;

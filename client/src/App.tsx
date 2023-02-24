import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './General/About';
import { Contact } from './General/Contact';
import { Home } from './General/Home';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/hello')
        const data = await res.json()
        setCount(data.count)
      } catch (error) {
        console.error("there was an error!", error)
      }
    }
    fetchCount()
  }, [])

  return (
    <div className="App">

    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="about" element={ <About />} />
      <Route path="contact" element={ <Contact />} />
    </Routes>

      <h5>Your Visit Count: {count}</h5>
    </div>
  );
}

export default App;

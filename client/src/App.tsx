import React, { useEffect, useState } from 'react';
import './App.css';

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
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;

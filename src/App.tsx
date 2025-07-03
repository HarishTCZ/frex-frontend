import React, { useEffect, useState } from 'react';
import { getAllFrex } from './api/FrexApi';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllFrex()
      .then(response => setMessage(response.data))
      .catch(error => console.error("API call failed:", error));
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;

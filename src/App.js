import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/hello`)
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("API call failed:", error);
      });
  }, []);
  console.log("API base URL:", process.env.REACT_APP_API_BASE_URL);


  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
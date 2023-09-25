import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    axios.get('http://localhost:8080/api/createTables').then(console.log('tables created')).catch(error => {
      console.error(error);
    });

    axios.get('http://localhost:8080/api/alterTables').then(console.log('tables altered')).catch(error => {
      console.error(error);
    });

  })


 return (
    <div>
      <Link to={'/pets'}><button>getStarted</button></Link>
    </div>
  )
}

export default Home
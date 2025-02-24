import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Whether.css'

const Whether = () => {
  const [city,setcity]=useState("");
  let ip=(event)=>{
    setcity(event.target.value);
  }
  let formdata=(event)=>{
    event.preventDefault();
    setcity("");
  }

  return (<>
    <div className='searchbox'>
      <h1 className='title'>whether app</h1>
      <form onSubmit={formdata}>
      <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={ip}/><br/><br/>
      <Button variant="contained"type='submit' >
        Search
      </Button>


      
      </form>
      
    </div>
    </> )
}

export default Whether

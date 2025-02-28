import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Whether.css'

const Whether = ({zalki}) => {
  const [city,setcity]=useState("");

 const API_URL="https://api.openweathermap.org/data/2.5/weather";
 const API_KEY="49fd7b7e1294ee20439b992858e357a6";
  

  let getdata=async()=>{
    let response=await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    let jsonresponse=await response.json();
    console.log(jsonresponse);

    let newobj= {
      // city:city,
      name:jsonresponse.name,
      temp:jsonresponse.main.temp,
      humidity:jsonresponse.main.humidity,
      mintemp:jsonresponse.main.temp_min,
      maxtemp:jsonresponse.main.temp_max,
      des:jsonresponse.weather[0].description
    }
    console.log(newobj);
    return newobj;
  }


  let ip=(event)=>{
    setcity(event.target.value);
  }
  let formdata=async(event)=>{
    event.preventDefault();
    setcity("");
    let newinfo=await getdata();
    zalki(newinfo);
  }

  return (<>
    <div className='searchbox'>
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

import './NewApp.css'
import React, { useState } from 'react'
import Whether from './whether'
import Infobox from './Infobox'

const NewApp = () => {
  const [data,setdata]=useState({
        name:"Anagar",
        des:"clear sky",
        humidity:19,
        maxtemp:306.33,
        mintemp:306.33,
        temp:306.33


  }) 
  
  let updateweather=(newinformation)=>{
    setdata(newinformation);
  }

  return (
    <div>
      <h1 className='title'>WeatherApp</h1>
      <Whether zalki={updateweather}/>
      <Infobox object={data}/>
    </div>
  )
}

export default NewApp



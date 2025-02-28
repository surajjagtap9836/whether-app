import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './infobox.css'
export default function Infobox({object}){

const image ="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
const summer="https://images.unsplash.com/photo-1549389055-008961ff0002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fHww"
const winter="https://images.unsplash.com/photo-1607074341827-6c648c1d40f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdpbnRlciUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D"
const Rainy="https://plus.unsplash.com/premium_photo-1670002344425-f274ee445f76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW55JTIwc2Vhc29uJTIwd2l0aCUyMHVtYnJlbGxhfGVufDB8fDB8fHww"


    return(
        <>
        <Card sx={{ maxWidth: 345 }}className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image={object.humidity>80?Rainy:object.temp>35?summer:winter}//Yakutsk
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        {/* City:{object.city} */}
        City:<u><i>{object.name}</i></u> &nbsp;&nbsp;{object.humidity>80?<AcUnitIcon/>:object.temp>35?<WbSunnyIcon/>:<ThunderstormIcon/>}
       
        </Typography>
        <Typography variant="body2" component={"span"}>
            <p>Description:{object.des}</p>
            <p>Humidity:{object.humidity}&deg;C</p>
            <p>temp:{object.temp}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
 
    
        
        </>
    )
}
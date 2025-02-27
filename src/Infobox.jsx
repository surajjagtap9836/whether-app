import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css'
export default function Infobox({object}){



const image ="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"


    return(
        <>
        <Card sx={{ maxWidth: 345 }}className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        {/* City:{object.city} */}
        City:<u><i>{object.name}</i></u>
       
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
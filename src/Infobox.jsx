import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox(){

     let object={
        // city:"Pune",
        name:"Pune",
        des:"clear sky",
        humidity:19,
        maxtemp:306.33,
        mintemp:306.33,
        temp:306.33

     }


const image ="https://images.unsplash.com/photo-1530530824905-661c2bb787f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return(
        <>
        <h1>Infobox</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {/* City:{object.city} */}
        City:{object.name}
       
        </Typography>
        <Typography variant="body2" component={"span"}>
            <p>Description:{object.des}</p>
            <p>Humidity:{object.humidity}</p>
            <p>temp:{object.temp}</p>
        </Typography>
      </CardContent>
      
    </Card>
 
    
        
        </>
    )
}
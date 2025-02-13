import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import propertyImage from "../assets/property.jpg";
import PropertyPreview from './PropertyPreview';
import { Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
// import { ThemeContext } from './Home';

export default function ActionAreaCard(property) {

    
    // console.log("ppp",property.property.description)
    let navigate = useNavigate(); 
    // let ppp = React.useContext(ThemeContext);
    // console.log("ppp", ppp);
    const handleClick = () => {
        let path=`/property-preview/${property.property.id}`;
        navigate(path);

    }
  return (
    
    <Card sx={{ maxWidth: 345, margin:"20px", borderRadius:"10px" }} onClick={handleClick} >
      <CardActionArea>
        <img src={property.property.imagerURL ? property.property.imagerURL:  propertyImage } style={{objectFit:"fit", height:"200px", width:"100%"}} alt="property-image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                House no.{ property.property.id}
          </Typography>
          <Typography variant="body2" sx={{ color: 'secondary-text' }}>
            
               { property.property.description}
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
  );
}
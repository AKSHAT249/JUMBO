

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import propertyImage from "../assets/property.jpg";
import { Typography, Button } from '@mui/material';

const PropertyPreview = () => {
  const { id } = useParams();
  const { houses } = useContext(ThemeContext); 
  const [distanceBetween, setDistanceBetween] = useState(null);

  console.log("ID from URL:", id);
  console.log("Fetched Houses in Context:", typeof houses);


 
  const propertyId = id

  const selectedHouse = houses.length > 0 ? houses.find((house) => (house.id) == propertyId) : null;
//   console.log("sssss",selectedHouse);
  const property_latitude = selectedHouse.latitude;
  const property_longitude = selectedHouse.longitude;
//   console.log(property_latitude, property_longitude );

  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in km
    setDistanceBetween(distance)
    return distance;
}

{selectedHouse && navigator.geolocation.getCurrentPosition((position) => {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;
    
    
    const distance = getDistance(userLat, userLon, property_latitude, property_longitude);
    // console.log(`Distance to destination: ${distance.toFixed(2)} km`);
    setDistanceBetween(distance.toFixed(2));
   
}, (error) => {
    console.error("Error getting location: ", error);
});}






  return (
    <div style={{margin:"none"}}>
      {houses.length === 0 ? ( 
        <p>Loading...</p>
      ) : selectedHouse ? (
        <>
        <div style={{width:"100%", height:"80vh", display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"20px" }} >
            <img src={selectedHouse.imagerURL ? selectedHouse.imagerURL: propertyImage} alt="property-image" style={{objectFit:"fit", width:"100%", height:"100%", borderRadius:"10px"}} />
            <Typography gutterBottom variant="h3" component="div" sx={{fontFamily:"Public Sans"}}>
                House no.{ selectedHouse.id}
            </Typography>
            <Typography variant="h5" sx={{ color: 'grey', fontFamily:"Public Sans", textAlign:"left" }}>
               { selectedHouse.description}
            </Typography>
            {
                distanceBetween && 
                <Typography variant="h5" sx={{fontFamily:"Public Sans"}}>
                    Distance : {distanceBetween} kilometers.
                </Typography>
            }
            {
                distanceBetween>5 ? <Typography variant="h5" sx={{color:"red", fontsize:"16px"}}>You are too far to unlock the home.</Typography> : <Button> Unlock Home</Button>
            }
        </div>
         
        </>
      ) : (<>
        <p>Property Not Found</p>
        <a href="/">Back to Properties Page</a>
        </>
      )}
    </div>
  );
};

export default PropertyPreview;



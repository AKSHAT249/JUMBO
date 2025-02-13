import React, {useEffect, useState, createContext, useContext} from 'react';
import axios from "axios";
import HouseCard from "./HouseCard.jsx";
import { ThemeContext } from '../App.jsx';




// export const ThemeContext = createContext(null);

const Home = () => {

  const houses = useContext(ThemeContext);
  // console.log("housesssss", houses.houses);

    
  return (
    <>
    { houses &&
    
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      {
        houses.houses.length>0 && houses.houses.map( (property) => {
          return (
            <div key={property.id}>
              <HouseCard property={property}  />
            </div>
          )
        } )

      }
      
    </div>
    
    }
    
    </>
  )
}
export default Home;

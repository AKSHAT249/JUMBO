import { useState, useEffect, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyPreview from './components/PropertyPreview';
import axios from "axios";


export const ThemeContext = createContext(null);




function App() {

  const [houses, setHouses] = useState([]);
    
    useEffect( () => {
    const fetchHouses = async () => {
        const response = await axios.get("https://678f678849875e5a1a91b27f.mockapi.io/houses");
        setHouses(response.data);
        
    }
    fetchHouses();
    }, [houses] );

    console.log("hhh", houses)
  
  return (
    <>
      {houses && <ThemeContext.Provider value={{houses}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property-preview/:id" element={<PropertyPreview />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>}
    </>
  )
}

export default App

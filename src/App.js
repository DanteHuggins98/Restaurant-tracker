import "./App.css";
import Map from "./Components/Map.js";
import {Footer}   from "./Components/Footer";
import Friends from "./Components/Friends";
import NavBar from "./Components/NavBar";
import Favorite from "./Components/Favorite"


function App() {
  return (
    <>
      <NavBar /> 
      <Favorite />
      <Map />
      <Friends />
      <Footer />
    </>
  );
}

export default App;

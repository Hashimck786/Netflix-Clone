import React from "react";
import NavBar from "./components/navbar/NavBar";
import './app.css'
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowpost/RowPost";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost/>
    </div>
  );
}

export default App;

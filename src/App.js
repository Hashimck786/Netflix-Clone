import React from "react";
import NavBar from "./components/navbar/NavBar";
import './app.css'
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowpost/RowPost";
import { horror,romance,action,originals } from "./url";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost title='Netflix Original' url={originals}/>
     <RowPost title='Action' isSmall url={action}/>
     <RowPost title='Romance' isSmall url={romance}/>
     <RowPost title='Horror' isSmall url={horror}/>

    </div>
  );
}

export default App;

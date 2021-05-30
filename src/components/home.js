import React from "react";
import App from "../App";
import image from "./images/Beholi.jpeg";

function Home() {
    return (
    <main>
      <h1>Welcome!</h1>
      <h2>This is a drawing of me, Beholi</h2>
      <img src={image} 
      className= "self portrait" 
      alt= "portrait" />
      </main>
    );
  }

  export default App;
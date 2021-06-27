import React from "react";
import image from "./Beholi.jpeg";

export default function Projects() {
    return (
    <main>
      <h2>Some artwork</h2>
      <img src={image} 
      className= "self portrait" 
      alt= "portrait" />

      <p>insert more artwork in the future</p>
      </main>
    )
  }
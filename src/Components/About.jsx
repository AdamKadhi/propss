import React from "react";
import NewOne from "./NewOne";

const About = () => {
    let products=[
        {
            image:"https://www.tunisianet.com.tn/187261-large/casque-gaming-spirit-of-gamer-xpert-h900-MIC-XH900.jpg",
            name:"Casque",
            prix:190
        },
        {
            image:"https://cdn.mos.cms.futurecdn.net/rfphfWvEc3PL2wfPJvZGiP.jpg",
            name:"Mouse",
            prix:120
        },
        {
            image:"https://media.wired.com/photos/65b0438c22aa647640de5c75/master/pass/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg",
            name:"Keyboard",
            prix:250
        },
    ]
  return (
    <div className="about">
      <h1>Products</h1>
     
      {products.map(el=><NewOne el={el} />)}
    </div>
  );
};

export default About;

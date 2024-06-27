import React from "react";
import "./ServicesDisplay.css";
import Services from "../Services/Services";
import { service_data } from "../../assets/assets";
function ServicesDisplay() {
  return (
    <div className="services-display" id="services-display">
      <h2>Our Services</h2>
      <div className="services-display-list">
        {service_data.map((item, index) => {
          return (
            <Services
              key={index}
              id={item._id}
              name={item.name}
              titles={item.titles}
              image={item.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServicesDisplay;

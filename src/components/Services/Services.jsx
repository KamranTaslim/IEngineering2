import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

function Services({ name, titles, image }) {
  return (
    <div className="services">
      <img className="services-image" src={image} alt={name} />
      <div className="services-content">
        <h2 className="services-title">{name}</h2>
        <ul className="services_list">
          {titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
        <Link to="/services">
          <button className="services-button">Know More</button>
        </Link>
      </div>
    </div>
  );
}

export default Services;

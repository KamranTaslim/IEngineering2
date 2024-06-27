import React, { useState } from "react";
import { Projects_Display_data } from "../../assets/assets";
import "./Projects.css";
import SolarFarm from "./ProjectDisplay/SolarFarm/SolarFarm";
import Battery from "./ProjectDisplay/Battery/Battery";
import WindFarm from "./ProjectDisplay/WindFarm/WindFarm";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  function redirect(id) {
    setSelectedProject(id);
  }

  return (
    <>
      <div className="project_main">
        <h2>Our Projects</h2>
        <div className="project_container">
          {Projects_Display_data.map((card, id) => (
            <div
              key={id}
              className="card-item-div"
              onClick={() => {
                redirect(id);
              }}
            >
              <img src={card.img} alt="box_img" />
              <p className="title">{card.title}</p>
              <p className="description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Conditional rendering based on selectedProject */}
      {selectedProject === 0 && <SolarFarm />}
      {selectedProject === 1 && <Battery />}
      {selectedProject === 2 && <WindFarm />}
    </>
  );
}

export default Projects;

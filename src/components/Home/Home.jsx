import React from "react";
import Hero from "../Hero/Hero";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div>
      <Hero />
      <ServicesDisplay />
      <Projects />
    </div>
  );
}

export default Home;

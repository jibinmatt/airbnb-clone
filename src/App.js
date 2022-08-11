import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

export default function App() {
  const info = data.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
        // {...card}
      />
    )
  } )

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {info}
      </section>
    </div>
  );
}

import React from "react";
import Navbar from "./Navbar";
import Location from "./Location";
import data from "./data";
import "./App.css";

function App() {
  console.log(data);
  const locations = data.map((location) => {
    return <Location key={location.id} location={location} />;
  });
  return (
    <div className="App">
      <Navbar />
      {locations}
    </div>
  );
}

export default App;

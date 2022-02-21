import React from "react";

const api = {
  key: "9349273bbd50101edfbd11e5a457906d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  return (
    <div className="app ">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search here...."
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
};

export default App;

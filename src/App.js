import React, { useState } from "react";

const api = {
  key: "9349273bbd50101edfbd11e5a457906d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          // console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    let out = `${day}, ${date} ${month}, ${year}`;
    return out;
  };

  let bgState =
    typeof weather.main != "undefined"
      ? weather.main.temp > 20
        ? "app warm"
        : "app"
      : " app home";

  return (
    <div className={bgState}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : typeof weather.message != "undefined" ? (
          <div className="empty">Location not Found!!</div>
        ) : (
          <div className="empty">Welcome User!</div>
        )}
      </main>
    </div>
  );
};

export default App;

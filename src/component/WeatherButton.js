import React from "react";
import Button from "react-bootstrap/Button";

const WeatherButton = ({ cities, setCity, city }) => {
  return (
    <div className="weather-button">
      <Button variant={city==""?"dark":"light"} onClick={() => setCity("")}>
        Current
      </Button>

      {cities.map((item) => (
        <Button variant={item==city?"dark":"light"} onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;

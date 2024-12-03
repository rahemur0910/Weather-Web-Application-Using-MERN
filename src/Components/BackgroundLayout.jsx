import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";

// Images
import Clear from "../assets/images/Clear.jpg";
import Cloudy from "../assets/images/Cloudy.jpg";
import Fog from "../assets/images/Fog.png";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/Snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather?.conditions) {
      const imageString = weather.conditions.toLowerCase();

      if (imageString.includes("sunny")) {
        setImage(Sunny);
      } else if (imageString.includes("clear")) {
        setImage(Clear);
      } else if (imageString.includes("cloud")) {
        setImage(Cloudy);
      } else if (imageString.includes("fog")) {
        setImage(Fog);
      } else if (imageString.includes("rain") || imageString.includes("shower")) {
        setImage(Rainy);
      } else if (imageString.includes("snow")) {
        setImage(Snow);
      } else if (imageString.includes("storm") || imageString.includes("thunder")) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;

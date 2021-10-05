import { useEffect, useState } from "react";
import "./App2.css";
import axios from "axios";
import useGeoLocation from "./Geolocation";

function Weatherapp() {
  const location = useGeoLocation();

  const [search, setsearch] = useState("karachi");
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=40ed58a2765c4a602efac457943bedcc&units=metric`
      )
      .then((res) => {
        const newPosts = res.data;
        setPosts(newPosts);
      });
  }, [search]);

  return (
    <div>
      {/* <h1>{posts?.main?.temp}</h1> */}
      {posts !== null ? (
        <div className="container">
          <div className={posts?.weather[0]?.main}>
            <div className="searchArea">
              <input
                className="search"
                placeholder="search"
                type="search"
                onChange={(event) => {
                  setsearch(event.target.value);
                }}
              />
            </div>

            <>
              <div className="text">
                <h1 className="cityName">{search}</h1>
                <h1 className="currentweather">{posts?.weather[0]?.main}</h1>
                <h1 className="temp">
                  {Math.round(posts?.main?.temp)}
                  <span className="degree">o</span>
                </h1>
                <h2 className="country">{posts?.sys?.country}</h2>
              </div>
              <div className="extraDetails">
                <h2>Wind Speed : {posts?.wind?.speed}</h2>
                <h2>
                  Real Feel : {Math.round(posts?.main?.feels_like)}
                  <span className="degree2">o</span>C
                </h2>
                <h2>
                  Temp Min : {Math.round(posts?.main?.temp_min)}
                  <span className="degree2">o</span>C
                </h2>
                <h2>
                  Temp Max : {Math.round(posts?.main?.temp_max)}
                  <span className="degree2">o</span>C
                </h2>
                <h2>Air Pressure : {posts?.main?.pressure}mbar</h2>
                <h2>Humidity : {posts?.main?.humidity}</h2>
                {/* <h2>
                  {location.loaded
                    ? JSON.stringify(location.coordinates.lat)
                    : "Data not available"}
                </h2> */}
              </div>
              {/* <video className="videoTag" autoPlay loop muted>
                  <source src={environment ? rain : haze} type="video/mp4" />
                </video>
                <div className="overlay"></div> */}
            </>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Weatherapp;

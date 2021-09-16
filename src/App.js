import React, { useState } from "react";
import "./styles.css";

const moviesList = [
  { type: "comedy", name: "phir hera pheri", rating: 9 },
  { type: "comedy", name: "Dhamal", rating: 7 },
  { type: "comedy", name: "Golmal", rating: 6 },
  { type: "sifi", name: "Annihilation", rating: 7 },
  { type: "sifi", name: "Star Wars", rating: 8 },
  { type: "sifi", name: "Star Trek", rating: 10 },
  { type: "horror", name: "Get Out", rating: 8 },
  { type: "horror", name: "28 Days Later...", rating: 7 },
  { type: "horror", name: "Hereditary", rating: 5 }
];

export default function App() {
  const [bestMovies, setbestMovies] = useState([]);

  function onClickHandler(book) {
    var tempMovie = [];
    moviesList.map((item) => {
      if (item.type === book) {
        tempMovie.push(item);
      }
    });
    setbestMovies(tempMovie);
  }

  return (
    <div className="App">
      <div className="main-container">
        <h1>Best Movies</h1>
        <h4>Checkout my favorite movies. Select a type to get started</h4>
        <button className="btn" onClick={() => onClickHandler("comedy")}>
          Comedy
        </button>
        <button className="btn" onClick={() => onClickHandler("sifi")}>
          Si-Fi
        </button>
        <button className="btn" onClick={() => onClickHandler("horror")}>
          Horror
        </button>

        <div className="movieNames">
          {bestMovies.map((item) => {
            return (
              <div className="movie-list" key={item.name}>
                {item.name}
                <br />
                {item.rating}/10
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

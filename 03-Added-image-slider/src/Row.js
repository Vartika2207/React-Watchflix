import React, { useEffect, useState } from "react";
import axios from "./axios";
import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className={classes.row}>
      <h2>{title}</h2>

      <div className={classes.rowPosters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={classes.rowPoster}
            src={
              base_url +
              `${isLargeRow ? movie.poster_path : movie.backdrop_path}`
            }
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;

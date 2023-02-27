import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  // youtube player options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // ...React,
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // returns promise
      movieTrailer(movie?.name || "")
        .then((url) => {
          //eg https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search); // inside returns id i.e. 'v=X....U'
          //  urlParams.get("v") returns value, v=value
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log("error is " + err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={(movie) => handleClick(movie)}
            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
            src={
              base_url +
              `${isLargeRow ? movie.poster_path : movie.backdrop_path}`
            }
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

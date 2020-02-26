import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = (movie) => {
  return (
    <Link to={` /movies/$(movie.id)`} className="movie-card">
      <h2>{movie.title}</h2>
        <h3>Director: <em>{movie.director}</em></h3>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div> 
      ))}
    </Link>
    
  );
};

export default MovieCard;

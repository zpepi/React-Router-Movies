import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = (movie, props) => {
  return (
    <Link to={` /movies/$(movie.id)`} className="movie-card">
      <h2>{props.title}</h2>
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </Link>
    
  );
};

export default MovieCard;

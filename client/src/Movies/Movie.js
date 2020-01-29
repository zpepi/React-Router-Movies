import React, { Component } from 'react';
import axios from 'axios';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,

  };
}

  componentDidMount() {
    const id = this.props.match.params.movieId;
    console.log(this.props.match.params.movieId)
    this.fetchMovie(id);

  }

  fetchMovie = id => {
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          this.setState(() => ({ movie: response.data }));
        })
        .catch(error => {
          console.error(error);
        });
      };
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  saveMovie = (movie) => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(movie);
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

  const { title, director, metascore, stars } = this.state.movie;

  return (
    <div>
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div star={star} key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div onClick={()=>this.saveMovie(this.state.movie)} className="save-button">Save</div>
    </div>
    </div>
  );
}
}
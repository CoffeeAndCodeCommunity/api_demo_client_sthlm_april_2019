import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this.fetchMovies()
  }

  async fetchMovies() {
    let movies = await axios.get('http://localhost:3000/api/movies')
    this.setState({movies: movies.data.movies})
  }
  render() {
    let movieList
    movieList = this.state.movies.map(movie => {
      return (
        <li key={movie.id}>{movie.title} - {movie.description}</li>
      )
    })
    return (
      <>
        <header>
          <h1>Moves:</h1>
          <ul>
            {movieList}
          </ul>
          
        </header>
      </>
    );
  }
}

export default App;

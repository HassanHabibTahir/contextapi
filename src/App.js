import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './movieList';
import {MovieProvider} from './moviesContext';
import AddMovies from './addmovies';

function App() {



  return (
    <MovieProvider>
    <div className="App">
      <AddMovies/>
    <MoviesList/>
    </div>
    </MovieProvider>
  );
}

export default App;

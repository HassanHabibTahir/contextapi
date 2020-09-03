import React,{useState,useContext} from 'react'
import Movies from './Movies';
import {MoviesContext } from './moviesContext';

 function MovieList() {
     const [movies,setMovies] = useContext(MoviesContext)
    return (
        <div>

            {movies.map((item, i)=>
            (
          <Movies key={i} name={ item.name } price={item.price}  id={item.id} />
            )
            )}
        </div>
    )
}

export default MovieList;
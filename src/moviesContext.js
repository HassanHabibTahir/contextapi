import React,{useState,createContext} from 'react'

// import MoviesList from './movieList';
export const MoviesContext = createContext();

export  const MovieProvider=(props)=> {
    const [movies, setMovies] = useState([{
        name:'HaryPoter',
      price:'$45',
      id:456567
      },{  name:'Game of thorone',
      price:'$43',
      id:456735},{  name:'Inception',
      price:'$42',
      id:451672},{  name:'monkies',
      price:'$41',
      id:456273}]);


    return (
        <MoviesContext.Provider value={[movies,setMovies]}>
        {props.children}
        </MoviesContext.Provider>
    )
}

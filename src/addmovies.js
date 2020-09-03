import React,{useContext,useState} from 'react';
import {MoviesContext} from './moviesContext';
const AddMovies =()=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('')
    const [movies,setMovies] =useContext(MoviesContext)



const updateName=(e)=>{
        setName(e.target.value)
    }
const updatePrice=(e)=>{
    setPrice(e.target.value)
}

const addMovie = e=>{
    e.preventDefault();
    setMovies((prevMovies)=>[...prevMovies, {name:name, price:price}  ])
}
return(
<form onSubmit={addMovie} >

    <input type="text" name="name" value={name}   onChange={updateName} />
    <input type="text" name="price"   value={price} onChange={updatePrice}/>
    <button onSubmit >Submit</button>
</form>

)

}
 export default AddMovies;
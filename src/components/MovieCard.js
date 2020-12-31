import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const MovieCard = ({movie})=>{
    return(
      <div className="row">
    <div className="col-12 text-center">
    {movie.name}
    </div>
      </div>
     
    )
}

export default MovieCard
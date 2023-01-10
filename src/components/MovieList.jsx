import React from 'react'

const MovieList = (props) => {
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        {props.movies.map((movie, index) => 
            <div className='col d-flex m-1'>
                <img src={movie.Poster} alt="movie poster" width={200}/>
            </div>
        )}
      </div>
    </div>
  )
}

export default MovieList
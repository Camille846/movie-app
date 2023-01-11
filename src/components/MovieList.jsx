import React from 'react'

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        {props.movies.map((movie, index) => 
            <div className='image-container col d-flex m-1'>
                <img src={movie.Poster} alt="movie poster" width={300}/>
                <div className="overlay d-flex align-items-center justify-content-center">
                    <FavoriteComponent />
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default MovieList
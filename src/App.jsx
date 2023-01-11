import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import AddtoFavorites from './components/AddtoFavorites'

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ce333cae`
    const response = await fetch(url)
    // convert http response into json 
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  // call getMovieRequest function when the component is loaded
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieList movies={movies} favoriteComponent={AddtoFavorites}/>
      </div>
    </div>
  )
}

export default App

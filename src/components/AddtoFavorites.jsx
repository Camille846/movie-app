import React from 'react'
import {    BsFillHeartFill } from 'react-icons/bs'

const AddtoFavorites = () => {
  return (
    <div className='favorite-container'>
        <span className="mr-2">Add to Favorites</span>
        <BsFillHeartFill color="red" size="1.5em" />
    </div>
  )
}

export default AddtoFavorites
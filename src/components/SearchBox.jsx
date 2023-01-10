import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4 input-group'>
        <input 
            type="text" 
            value={props.searchValue}
            // set the search value to the value of the input field
            onChange={(event) => props.setSearchValue(event.target.value)}
            className='form-control input_search shadow-none' 
            placeholder='Type to search...' 
        />
        <span className='input-group-text search-btn'>
            <AiOutlineSearch />
        </span>
    </div>
  )
}

export default SearchBox
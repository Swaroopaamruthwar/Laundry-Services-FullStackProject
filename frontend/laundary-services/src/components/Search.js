import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Createorder/create.css'
import search from '../assets/uploads/icons/search.svg';

const Search = () =>{
    return(
        <>
            {/* <span className='search-div'>
                <img src={search} alt="search" />
            </span>
            <input type='text' className="form-control" /> */}
            <div className="search">
                <input type="text" className="input"/>
            </div>
        </>
    )
}

export default Search

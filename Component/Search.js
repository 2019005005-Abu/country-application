import React,{useState} from 'react'

const Search = () => {
    const [serchText,setSearchText]=useState('');

    function searchHandleChange(event){
     setSearchText(event.target.value)    
    }
  return (
    <div style={{textAlign:'center'}}>
       <inpu 
       type='text'
       placeholder='Search Country'
       value={serchText}
       onChange={searchHandleChange}
       />
    </div>
  )
}

export default Search
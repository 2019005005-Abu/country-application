import React,{useState,useEffect} from 'react'

const Search = () => {
    const [serchText,setSearchText]=useState('');
    const searchHandleChange=event=>{
    setSearchText(event.target.value) 
    }

useEffect(() => {
alert(serchText)
}, [serchText]);
  return (
    <div style={{textAlign:'center'}}>
       <input
       type='text'
       placeholder='Search Country'
       value={serchText}
       onChange={searchHandleChange}
       />
    </div>
  )
}

export default Search
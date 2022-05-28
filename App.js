
import './App.css';
import React,{Fragment,useState,useEffect} from 'react'
import Countries from './Component/Countries';
import Search from './Component/Search';
const url='https://restcountries.com/v3.1/all'

/*
1.Step 1-> basic structure setup
2.Step-2->fetch data from the api
3.step-3->Display data
4.step-4>Remove country functionality
5.step-5->Search Country functionality
*/
function App() {
  const [isLoading,setLoading]=useState(true);
  const [error,SetError]=useState(null);
  const [countries,SetCountries]=useState([]);
  const [filterCountries,SetFilterCountries]=
  useState(countries);
 const fetchData=async(url)=>{
   setLoading(true);
   try{
    const response=await fetch(url);
    const data=await response.json();
    SetCountries(data);
    SetFilterCountries(data);
    setLoading(false);
    SetError(null);
    console.log(countries)
   }catch(error){
     setLoading(false);
     SetError(error)
   }
  
 }
  useEffect(()=>{
    fetchData(url)
  },[]) 
  const HandleRemoveCountry=(name)=>{
    const filter=filterCountries.filter((country)=>country.name.common !=name);
    SetFilterCountries(filter)
  }
  return (
    <div className=''>
      <h1>Country App</h1>
      <Search/>
      {isLoading && <h3>Loading....</h3>}
      {error && <h4>{error.message}</h4>}
      {countries && 
      <Countries 
      countries={filterCountries}
      onRemoveCountry={HandleRemoveCountry}/>}
    </div>
  );
}

export default App;

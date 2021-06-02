import React, { useState,useEffect } from 'react';
import  "../css/search.css";
import Show from "./Show";
import logo from"../images/logo.png";
import {key,cx}from "../Api/api";
import axios from 'axios';
const Search=(props)=> {
    const [state,setState]=useState(props.location.state ? props.location.state :"");
const[results,setResults]=useState([]);
const [info,setInfo]=useState('');
    const goBack=()=>{
        props.history.push("/");
    }
    const clear=()=>{
     setState("");
    }
    const searchGoogle=async (e)=>{
        e.preventDefault();
   try{
 const response=await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
if(response){
setResults(response.data.items);
setInfo(response.data.searchInformation);
}
catch (error){
console.log(error);
}
   };
useEffect(()=>{
async function getQueries(){
  try{
 const response=await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
if(response){
setResults(response.data.items);
setInfo(response.data.searchInformation);
}
}
catch (error){
console.log(error);
}
}
getQueries();
},[]);
const value=()=>{
document.getElementById('inputValue').value = ''
}
  return (
 <div className="mainContainer">
<div className="mainContainer__header">
<div className="mainContainer__logo">
        <img src={logo} onClick={goBack} alt="logo"/>
        </div>
        <form onSubmit={searchGoogle}>
   <div className="mainContainer__search">
        <input type="text" id="inputValue" value={state} onChange={(e)=>setState(e.target.value)}/>
     <i class="fas fa-search icons" onClick={searchGoogle}></i>
        <div className="mainContainer__search__straightline">
        
        </div>
</div>
</form>
  <button onClick={value} className="cutIcons"><i class="fas fa-cut"></i></button> 
        
    </div>
<Show info={info}results={results}/>
    </div> 
  );
}
// value={state} onClick={clear}
export default Search;

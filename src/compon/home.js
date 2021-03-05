import React, { useState } from 'react';
import logo from"../images/logo.png";
import '../css/home.css';
const Home=(props)=>{
    const [state,setstate]=useState('');
    const searchGoogle=(e)=>{
        props.history.push({pathname :"/search",state});
    }
   const style={
       color:'black'
   }
return(
<div className="main">
    <div className="main__logo">
        <img src={logo}alt="Logo"/>
    </div>
   <form className="main__form" onSubmit={searchGoogle}>
   <div className="main__search">
        <input className="main__search__input"type="text"  autoFocus  onChange={(e)=>setstate(e.target.value)}/>
        <i class="fas fa-search icon"></i>

    </div>
    <div className="main__submit">
        <input type="submit" style={style}  value="YCRX Search"/>
   
    </div>
   </form>
</div>
);
}
export default Home;

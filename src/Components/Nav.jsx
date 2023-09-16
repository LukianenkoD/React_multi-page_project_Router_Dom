import React from 'react';
import {NavLink} from "react-router-dom";
import "../style.css";


function Nav() {
  return (
    <div style={{display:"flex", gap:"30px", justifyContent:"center"}}>
        <div>
        <NavLink to="/" style={{textDecoration:"none", color:"black", fontSize:"30px"}} className={({isActive})=>isActive?"active":""}>Home</NavLink>
        </div>
       <div>
       <NavLink to="/posts" style={{textDecoration:"none", color:"black", fontSize:"30px"}} className={({isActive})=>isActive?"active":""} >Posts</NavLink>
       </div>
    </div>
  )
}

export default Nav
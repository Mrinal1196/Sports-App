import React from 'react';
import'./Navbar.css'
export default function Navbar(){
    return(
        <div>
            <h1>  Sports App</h1>
            <a style={{margin:'10px',color:'black'}}>Home</a> <span>|</span>
            <a style={{margin:'10px',color:'black'}}> About Us</a> <span>|</span>
            <a style={{margin:'10px',color:'black'}}> Contact Us</a>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import './Player.css';
export default function Players(){
    const[players,setplayers]=useState([]);
    const[searchVal,setsearchVal]=useState('');
    useEffect(()=>{
        axios.get('https://api.npoint.io/20c1afef1661881ddc9c')
        .then(res=>{
            console.log(res.data);
            setplayers(res.data.playerList);
        }).catch(err=>{
            console.log(err);
        })
        
    },[]);
    function displayMatch(arr)
    {
        var t1,t2;
        arr.map(ele=>{
            t1=ele.CCode;
            t2=ele.VsCCode;
        })
        return (<span>{t1} vs {t2}</span>)
        
    }
    function displayTime(arr){
        var time;
        arr.map(ele=>{
            time=ele.MDate
        });
        return (<span>{time}</span>)
    }
    function sortPlayer() {
        var ply=players.sort((a,b) =>  a.Value-b.Value );
        
    }
    sortPlayer();
    function searchPlayer(){
        //searchVal=document.getElementById('search').value;
        
        players.filter(ply => ply.TName===searchVal || ply.PFName===searchVal).map(filteredply => (
            console.log(filteredply.PFName)
          ))
    }
    const playerlist=players.map(obj=>{
            return (<div className='card col-md-3 shadow-lg p-3 mb-5 bg-white rounded' style={{width:'400px',padding:'20px'}}>
                
                <div className='card-header text-center bg-primary' style={{color:'white'}}>
                    <p><b>Player:</b> {obj.PFName}</p>
                                       
                </div>
                <div className='card-body text-center'>
                    <img src={`player-images/${obj.Id}.jpg`}/>
                    <p><strong>Position:</strong>{obj.SkillDesc}</p>
                    <p><strong>Net Worth:</strong>${obj.Value}</p>
                </div>
                <div className='footer text-center'>
                <p><strong>Upcoming Match:</strong> {displayMatch(obj.UpComingMatchesList)}</p>
                <p><strong>Match time:</strong>{displayTime(obj.UpComingMatchesList)} </p>  
                 
                </div>
                              
                            
                
        </div>)
    })
    return(
        <div>
            <span>Search:<input type='text' placeholder='Enter search text here' onChange={(e)=>{setsearchVal(e.target.value)}}></input></span>
            <span><button className='btn btn-primary' onClick={searchPlayer}>Find</button></span>
            <div className='row justify-content-center'>
            
                {playerlist}
            </div>
            </div>
        
    )
}
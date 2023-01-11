import React, { useEffect, useState } from 'react'
import Data from '../Data/Data';
export default function Wheel() {
    
    const[userList, setUserList] = useState([]);
    const[winner, setWinner] = useState("?");
    
    const loadUsers = () =>{
        setUserList(Data);
    }

    useEffect(()=>{
        loadUsers()
    },[]);

    const getWinner = () => {
        let x = Math.random;
        setWinner(userList[x]);
    }

    return (
    <div>
        <div>
        {
            userList.map((user, index) => (
                <li key={index}>{user.Name}</li>
            ))
        }
        </div>
        
        <button onClick={getWinner}>Start</button>
        <button>Stop</button>

        <h1>{winner}</h1>

    </div>
  )
}

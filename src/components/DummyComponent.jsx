import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
const Dummy = () => {
    const [token, setToken] = useState('')
    useEffect(() => {
if(localStorage.getItem('UWT')){
    fetch('https://localhost:3000/validate-token',{
        method:'POST',
        headers:{
            'Authorization':localStorage.getItem('UWT'),
        }
    }).then((res) => res.json())
    .then((res) => {
        setToken(res.key)
    })
    .catch((error) => {
       console.log(error) 
       history.pushState('/')
    })
    }
    },[])
    return(
        <div>
          <h1>The user is being validated through token</h1>
          <h3>The secret Key is {token}</h3>
          <button type="button" class="btn btn-danger" onClick={() =>{
localStorage.clear();
history.pushState('/')
          }}>Logout</button>
        </div>
    )
}

export default Dummy;
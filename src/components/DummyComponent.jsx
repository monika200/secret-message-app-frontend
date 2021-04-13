import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
const Dummy = () => {
    const history = {useHistory}
    const [token, setToken] = useState('')
    useEffect(() => {
if(localStorage.getItem('UWT')){
    fetch('https://secret-messaging.herokuapp.com/validate-token',{
        method:'POST',
        headers:{
            'Authorization':localStorage.getItem('UWT'),
        }
    }).then((res) => res.json())
    .then((res) => {
        console.log(res)
        setToken(res.key)
    })
    .catch((error) => {
       console.log(error) 
       history.push('/')
    })
    }
    },[])
    return(
        <div>
          <h1>The user is being validated through token</h1>
          <h3>The secret Key is {token}</h3>
          <button type="button" class="btn btn-danger" onClick={() =>{
localStorage.clear();
history.push('/')
          }}>Logout</button>
        </div>
    )
}

export default Dummy;
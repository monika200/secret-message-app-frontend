import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
const Dummy = () => {
    const history = useHistory();
    const [token, setToken] = useState('')
    useEffect(() => {
if(localStorage.getItem('UWT')){
    fetch('https://secret-messaging.herokuapp.com/validate-token',{
        method:'POST',
        headers:{
            'Authorization':localStorage.getItem('UWT'),
            'Content-Type' : 'application/json'
        }
    }).then((res) => res.json())
    .then((res) => {
        console.log(res)
        setToken(res.key)
    })
    .catch((error) => {
       console.log(error) 
    })
    }
    },[])
    return(
        <div className="container mt-3 text-center text bg-primary">
          <h1 className="mt-2 mb-3 d-inline-block">The user is being validated through token</h1>
          <h3 >The secret Key is {token}</h3>
         {<button type="button" class="btn btn-success" onClick={() =>{
 localStorage.clear()
 history.push('/')
          }}>Logout</button>}
        </div>
    )
}

export default Dummy;
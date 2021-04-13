import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom';

const ShowMessage = () => {

    const history = useHistory()

    const [id, setId] = useState('')
    const [message, setMessage] = useState('')
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const urlString = window.location.href;
        const url = new URL(urlString);
        setId(url.searchParams.get("rs"))
    }, [])

    useEffect(() => {
        if(id?.length > 0){
            fetch(`https://secret-messaging.herokuapp.com/message-by-id/${id}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setMessage(res.result);
                console.log(res.result);
                setPageLoaded(true)
            })
            
            .catch((error) => {
                console.log(error);
            })
        }
    }, [id])

    return (
        <React.Fragment>
            {message && pageLoaded ?
            <div className="container mt-3 text-center bg-warning">
                <h1 className="">Secret Message For You....</h1>
                <div className="text-center uppercase px-5 mx-5 mt-3">
                    <h4 className="uppercase">This is a creepy and secret message for you don't share it with anyone!!!</h4>
                </div>
                <div className="bg-dark border rounded text-center text-white p-5 m-5">
                    <h3>{message}</h3>
                </div>
                <div className="text-center">
                    <button className="btn btn-success" onClick={() => history.push('/')}>Create a New Secret Message</button>
                </div>
            </div> :
            pageLoaded &&
            <div className="container mt-3">
            <h1>OOPS!!!</h1>
            <div className="text-center text-white px-5 mx-5 mt-3">
                <h4>The message has been deleted by the creator...</h4>
            </div>
        </div> 
            }
        </React.Fragment>
    )
}

export default ShowMessage;



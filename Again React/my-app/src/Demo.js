import React, { useState, useEffect } from 'react';
import { getData, postData } from './Fetch';
export default function Demo() {
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        function reload(){
            getData('https://8dd2-52-90-188-33.ngrok.io/api/web/skill-types')
            .then(data =>{
                console.log(data);
            });
        }
        reload();
        
    });

    function login(){
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let body = {
            "account": username,
            "password": password
        }

        postData('https://8dd2-52-90-188-33.ngrok.io/api/auth/login', body)
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
    
    }
    return (
        <div>
            <input id='username'></input>
            <input id='password'></input>
       
            <button onClick={() => {login()}}>login</button>
        </div>
    );
}
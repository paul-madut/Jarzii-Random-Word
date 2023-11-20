import { useEffect } from "react";

import axios from 'axios';

import React from 'react';

function Button({ setCurrentWord }) {

    const fetchData = () => {
        axios.get('https://random-word-api.herokuapp.com/word?number=2')
            .then(response => {
                setCurrentWord(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            <button onClick={() => fetchData()}>Click me</button>
        </div >
    );
}

export default Button;
import { useEffect } from "react";

import axios from 'axios';

import React from 'react';

function Button({ setCurrentWord, wordsGenerated }) {

    const fetchData = () => {
        axios.get(`https://random-word-api.herokuapp.com/word?number=${wordsGenerated}`)
            .then(response => {
                setCurrentWord(response.data + "\n");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            <button onClick={() => fetchData()}>New word</button>
        </div >
    );
}

export default Button;
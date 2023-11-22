import React from 'react';

function DisplayWord({ currentWord }) {

    return (
        <div>
            <h1>The current word is</h1>
            {currentWord}
        </div>
    );
}

export default DisplayWord;
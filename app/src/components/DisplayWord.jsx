import React from 'react';

function DisplayWord({ currentWord }) {

    return (
        <div>
            <h1>The current word is</h1>
            {currentWord.map(word => (
                <p>{word}</p>
            ))}

        </div>
    );
}

export default DisplayWord;
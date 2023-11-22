import React from 'react'

function WordCount({setWordsgenerated}) {

    const handleInputChange = (e) => {
    const { value } = e.target;
    setWordsgenerated(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted")
  }

  return (
     <div>
      {/* Step 1: Create a form element */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numberInput">Enter a Number:</label>
          <input
            type="number"
            id="numberInput"
            name="numberInput"
            
            onChange={handleInputChange}
            required // Add the 'required' attribute to make the field mandatory
          />
        </div>
      </form>
    </div>
  )
}

export default WordCount
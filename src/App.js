import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [items, setItems] = React.useState([]);
  let temp = [];

  /**
   * 
   * @param {Event} event 
   */
  function handleSubmit(event) {
    event.preventDefault()
    setText(text2)
    temp = [...items, <p>{text}</p>]
    setItems(temp)

    console.log(items)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          hello
        </label>
        <input
          type = "text"
          name = "text_daal_idhar"
          onChange={(event) => {
            setText2(event.target.value)
          }}>
        </input>
        <button type = "submit">
          Submit
        </button>
      </form>
      {
        items
      }
    </div>  
  );
}

export default App;
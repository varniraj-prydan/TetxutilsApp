
import React, { useState } from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    let text1 = text.toUpperCase();
    setText(text1);
  }

  const handleLowClick = () => {
    let text1 = text.toLowerCase();
    setText(text1);
  }

  const handleClrClick = () => {
    let text1 = '';
    setText(text1);
  }

  const handleCpyClick = () => {
    navigator.clipboard.writeText(text);
    props.fun({ message: "Text Copied!", type: "success" });

    // alert("Copied!");
    //props.changeAlert({type: 'success', msg: 'copy text'})
  }


  const handleOnChange = (event) => {

    setText(event.target.value);
  }
  return (
    <>
      <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1 >{props.heading}</h1>
        <div className="form-group">

          <textarea className="form-control" placeholder="Leave a comment here" rows={6} id="Box" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white', border: "solid black 2px" }}></textarea>
        </div>
        <div className="container my-3">
          <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCpyClick}>Copy Text</button>
        </div>
        <div className='container py-3'>
          <h1>Your Text summary</h1>
          <p>Total words are {text.split(/\s+/).filter((element) => { return element.length != 0 }).length} and characters are {text.split("").filter((element) => { return element.length != 0 }).length}</p>
          <p>Average minutes to read {0.008 * text.split(" ").filter((element) => { return element.length != 0 }).length}</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : 'Nothing to Preiview'}</p>
        </div>
      </div>
    </>
  );
}

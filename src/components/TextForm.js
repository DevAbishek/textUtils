import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick = () => {
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    let wordCount = text.split(" ").length
    let charCount = text.length

    if (wordCount === 1 && charCount === 0) {
        wordCount = 0
    }

    return (
        <>
            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{wordCount} words and {charCount} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}

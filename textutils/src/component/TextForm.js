import React ,  { useState } from 'react'


function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
        // console.log("Clear was clicked" + Text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleCopyClick = () => {
        // console.log("Copy was clicked" + Text);
        let newText = document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges(); // To remove the selection from the textarea
        props.showAlert("Text copied to clipboard", "success");
    }
    const handleonchange = (event) => {
       // console.log("onchange");
        setText(event.target.value);
    }
    const [Text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' ,color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="3"></textarea>
            </div>
            <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>




        </div>
        <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{Text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words {Text.length} characters</p>
            <p>{0.008 * Text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"enter somthing to preview it here "}</p>
            </div>
        </>
    )
} 

export default TextForm

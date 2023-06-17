import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnChange = (event)=>{
      // console.log("On change");
      setText(event.target.value);
    }

    // const handleOnClick = (event)=>{
    //     // console.log("On change");
    //     if (text === "Type here")
    //     setText(" ");
    //     else
    //     setText(event.target.value);
    // }

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        // console.log("Clear Textarea was clicked!");
        let newText = " ";
        setText(newText);
        props.showAlert("Textarea cleared!", "success");
    }

    const handleCopyClick = ()=>{
      // console.log("copied");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Textarea copied!", "success");
    }

    const removeExtraSpace = ()=>{
      // console.log("Extra Spaces removed");
      let newText = text.split(/[ ]+/);
      setText(newText.join(" ")) 
      props.showAlert("Extra spaces removed from textarea!", "success");
    }

    // text="new text"; // wrong way to set the state
    // setText("new text"); // correct way to set the state

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}> 
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode ==='light'?'white':'grey', color: props.mode ==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Textarea</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Textarea</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textarea to preview"}</p>
    </div>
    </>
  )
}


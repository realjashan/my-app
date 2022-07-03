import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

 export default function textform(props ) {
    const handleUpClick= ()=> {
        // console.log("UpperCase Was Clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase","success")
    }
       const handleCopy =()=> {
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);


}
    const handleLoClick= ()=> {
        // console.log("UpperCase Was Clicked");
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick= ()=> {
        // console.log("UpperCase Was Clicked");
        let newText='';
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange= (event)=> {
      
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
<div className="conatiner py-4">
<div className="mb-3">
    <h1 style={{color:props.mode==='dark'?'white':'black'}} >Enter The Text To Analyze</h1>

  <label htmlFor="Enter Your Text" className="form-label">{props.text}</label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"   onChange={handleOnChange} value={text}></textarea>
  <Button variant="primary mx-3" onClick={handleUpClick}>Convert Uppercase</Button>{' '}
  <Button variant="primary" onClick={handleLoClick}>Convert Lowercase</Button>{' '}
  <Button variant="primary" onClick={handleClearClick}>Clear Text</Button>{' '}
  <Button variant="primary" onClick={speak}>Speak</Button>{' '}
  <Button variant="primary" onClick={handleCopy}>Copy Text</Button>{' '}



</div>
</div>
<div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ?text :"Enter Text To Preview Here"}</p>
</div>


</>
    )
}
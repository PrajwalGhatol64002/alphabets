import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import props from "prop-types"
export default function TextForm(props) {
  const handleUpClick = ()=> {
    console.log ("UpperCase was Clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to UppearCase!","success");
  }
  const handleOnChange = (event)=> {
    console.log("On Change");
    setText(event.target.value)
  }
    
  const handleclearClick= ()=> {
    // console.log ("UpperCase was Clicked");
    let newText = '';
    setText(newText)
  }
  const handleCopy =() =>{
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text);
  }
  
  const [text, setText] = useState("Enter the text here2")
  // setText("new text")
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3" style= {{color: props.mode==='dark' ?'white':'black'}}>
     {/* <label for="myBox" class="form-label">Example Textarea</label> */}
      <textarea className="form-control" value ={text} onChange = {handleOnChange} style= {{backgroundColor: props.mode==='dark' ?'grey':'light'}} id="myBox" rows="8"></textarea>
      <button className="btn-btn-primary  my = 3 mx-1" onClick = {handleUpClick}Changecolor="blue">Convert to UpperCase</button>  
      <button className='btn-btn-primary  my = 3 mx-2'  onClick ={handleclearClick} >Clear Text</button>
      <button className='btn-btn-primary mx = 1' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className='container my-3'>
       <h1> Your text Summary</h1>
       <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} 
       words and {text.length} charachter</p>
      </div>  
    </div>
    </> 
    );
  }
       


      



    
   
    
  
      

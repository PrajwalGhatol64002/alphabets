import React, { useState } from "react";

export default function About(props) {
   
  // const [myStyle, setMyStyle] = useState({
  //   color : 'black' ,
  //   background : 'white'
  // })
  // const [btntext,setBtnText] = useState("Enable dark Mode")

    let myStyle ={
      color: props.mode === 'dark'?'white':'black',
      backgroundColor : props.mode === 'dark'? 'black' : 'white'
    }
  
  
  return (
    <div className="container" style = {myStyle}>
        <h2>About Us</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Textutiles gives you a way to analyze you text quickly and efficeiently.be it word count,charachetr count or .
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use 
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Textutilies is a free charachter counter that pool thet provies instant chara hetr count statiecss for writhing.
              textiutlies reports thet number of words an charachetr . then itb is suitable for writing text with word/charachetr limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             Browserr Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              This word counter sofetwaer work in any brwesr such as Chrome,
              firmfare , internet Explorer ,Safari, Opera.It suites yo count charachetr in facebook , blog, books ,
              excel document, essays etc.
            </div>
          </div>
        </div>
      </div>
       <button onClick={toggleStyle} type="button" className="btn-btn-primary">{btntext}</button>
    </div>
  )
  }

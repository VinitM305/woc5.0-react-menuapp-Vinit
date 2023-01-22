import React, {useState} from 'react'
import PropTypes from 'prop-types'
export default function Text(props){
  const [text, setText] = useState('Enter the text');
  const handlechange = (event)=>{
    setText(event.target.value);
  }
  const handleclickU = ()=>{
    let newtext = text.toUpperCase(setText);
    setText(newtext);
  }
  const handleclickL = ()=>{
    let newtext = text.toLowerCase(setText);
    setText(newtext);
  }
  const handleclickclear = ()=>{
    let newtext = '';
    setText(newtext);
  }
  return (
    <>
  <div>
  <div class="mb-3" >
  <h3 style = {{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
    <label forhtml="exampleFormControlTextarea1" class="form-label" ></label>
    <textarea class="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="8" ></textarea>
  </div>
  </div>
  <div className="container">
  <button class="btn btn-primary p-2 m-2 mr-3 pr-2"  type="button" onClick={handleclickU}>To Uppercase</button>
  <button class="btn btn-primary p-2 mr-3 m-2 pr-2" type="button" onClick={handleclickL}>To Lowercase</button>
  <button class="btn btn-primary p-2 mr-3 m-2 pr-2" type="button" onClick={handleclickclear}>Clear msg</button>
</div>
<div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
  You have read {text.length} characters and {text.split(" ").length} words.
  <h2>Preview</h2>
  <p style={{color: props.mode==="dark"?"white":"black"}}>{text.length>0?text:"Enter something to view"}</p>
</div>
  </>
  )
}
Text.prototypes={
  heading: PropTypes.string
};
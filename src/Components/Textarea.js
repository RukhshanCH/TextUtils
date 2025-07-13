import React, { useState } from 'react'

export default function Textarea(props) {
  
  const handle = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("")
  const convertUp = () => {
    let new_text = text.toUpperCase()
    setText(new_text)
      props.showalert("Coverted to Uppercase", "Success")
  }
  const convertLo = () => {
    let new_text = text.toLowerCase()
    setText(new_text)
      props.showalert("Coverted to Lowecase", "Success")
      
  }
  const extraspaces = () => {
    let new_text = text.split(/[ ]+/)
    setText(new_text.join(' '))
      props.showalert("Extra spaces removed", "Success")
      
  }
  const Copytxt = () => {
    navigator.clipboard.writeText(text)
      props.showalert("Copied!", "Success")
  }
  const Cleartxt = () => {
    let new_text = ""
    setText(new_text)
      props.showalert("Cleared!", "Success")
  }
  
  return (
    props.showalert && <div>
        <h1>
          Enter the text to analyze below
        </h1>
        <textarea id='mybox' rows={8} value={text} placeholder='Enter text here' onChange={handle} className="form-control"></textarea>
        <button disabled={text.length===0} className={`btn btn-${props.alert==='dark'?'danger':'success'} my-3 mx-1`} onClick={convertUp}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.alert==='dark'?'danger':'success'} my-3 mx-1`} onClick={convertLo}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.alert==='dark'?'danger':'success'} my-3 mx-1`} onClick={extraspaces}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.alert==='dark'?'danger':'success'} my-3 mx-1`} onClick={Copytxt}>
          Copy
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.alert==='dark'?'danger':'success'} my-3 mx-1`} onClick={Cleartxt}>
          Clear
        </button>
        <h2>
          Your text summary
        </h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} charachters</p>
        <p>{0.008 * text.split(' ').filter((element) => {return element.length!==0}).length} Minutes read</p>
        <h3>
          Preview
        </h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
  )
}

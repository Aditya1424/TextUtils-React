import React, {useState} from 'react'



export default function TextForm(props) {

    

    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase()
        setText(newText)
        if(text.length!==0){
        props.showAlert('Converted to Uppercase','success')
        }
    }

    const handleLoClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.toLowerCase()
        setText(newText)
        if(text.length!==0){
        props.showAlert('Converted to Lowercase','success')
    }
}
    
    

    const handleClearClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = ""
        setText(newText)
        if(text.length!==0){
        props.showAlert('Text is clear','success')
    }
}

    const handleSpacesClick = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        if(text.length!==0){
        props.showAlert('Wide spaces has been removed','success')
    }
}

    

    const handleOnChange = (event)=>{
        // console.log('On change')
        setText(event.target.value)
    }

    

    const [text, setText] = useState('');


    // text = 'new text'; // Wrong way to change the state
    // setText('new text');  // Correct way to change the state

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===
        'dark' ? 'grey': 'white' , color: props.mode==='dark'? 'white': 'black' }} id="myBox" rows="10"></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpacesClick}>
            Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear text
        </button>
        
        
        
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.length===0 ? 0 :text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read per word</p>
        
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter something on text editor to preview it"}</p>
    </div>
    </>
  )
}

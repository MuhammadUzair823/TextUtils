import React ,{useState} from 'react'

export default function TextForm(props) {
   const handleUpClick = () =>{
    if(!text == "")
    {
        let newText = text.toUpperCase();
        setText(newText);
    }
    else
    {
        props.showAlert("Please enter some text","danger");
    }
   }
   const handleLowerClick = () =>{
    if(!text == "")
    {
        let newText = text.toLowerCase();
        setText(newText);
    }
    else
    {
        props.showAlert("Please enter some text","danger");
    }
   }
   const handleEmpClick = () =>{
    let newText = "";
    setText(newText);
   }
   const handleOnChange = (event) =>{
    setText(event.target.value)
   }
   const handleCopyClick = () =>{
     navigator.clipboard.writeText(text);
     props.showAlert("Copy to clipboard","success");
   }

   const handleExtraSpacesClick = () =>{
    let newText = text.split(/[ ]+/);
    setText (newText.join(" "));
  }
    const [text,setText] = useState("");
    return (
        <>
        <div className="mb-3 container mt-3" style={{background: props.mode == 'dark' ? 'dark' : 'light'}}>
        <h1 className="text-center my-4">{props.headingText}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.labelText}</label>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-sm btn-primary my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-sm btn-success my-2 mx-2" onClick={handleLowerClick}>Convert to lowercase</button>
        <button className="btn btn-sm btn-danger my-3" onClick={handleEmpClick}>Clear</button>
        <button className="btn btn-sm btn-danger my-3  mx-2" onClick={handleExtraSpacesClick}>Remove extra spaces</button>
        <button  className="btn btn-sm btn-secondary" onClick={handleCopyClick} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">Copy to clipboard</button>
        
            <h2>Summary</h2>
            <p>Number of words <b>{!text == "" ? text.split(" ").length : 0}</b> Number of characaters <b>{text.length}</b></p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

    </>
  )
}

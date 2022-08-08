import React ,{useState} from 'react'

export default function TextForm(props) {
  const [preview,setPreview] = useState('');
   const handleUpClick = () =>{
    if(!text == "")
    {
        let newText = text.toUpperCase();
        // setText(newText);
        setPreview(newText);
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
        //setText(newText);
        setPreview(newText);
    }
    else
    {
        props.showAlert("Please enter some text","danger");
    }
   }
   const handleEmpClick = () =>{
    let newText = "";
    setText(newText);
    setPreview(newText);
   }
   const handleOnChange = (event) =>{
    setText(event.target.value);
    if(event.target.value == "")
    {
      setPreview('');
    }
   }
   const handleCopyClick = () =>{
     navigator.clipboard.writeText(text);
     props.showAlert("Copy to clipboard","success");
   }

   const handleExtraSpacesClick = () =>{
    let newText = text.split(/[ ]+/);
    //setText (newText.join(" "));
    setPreview (newText.join(" "));
  }
  const handleCapitalizeFirstLetterClick = () =>{
    let newText = text.split(/[ ]+/);
    //setText (newText.join(" "));
    let removeExtraSpaces = newText.join(" ");
    let rplc = removeExtraSpaces.replace(/\r?\n|\r/g, "");
    let splitWords =  rplc.split(" ");
    let newArray = [];
    splitWords.forEach(word =>  {
     let capitalizeWord = word.replace(word.charAt(word[0]),word.charAt(word[0]).toUpperCase());
      newArray.push(capitalizeWord)
    });
     setPreview (newArray.join(' '));
    //setPreview(rplc);
  }
  
    const [text,setText] = useState("");
    return (
        <>
        <div className="mb-3 container mt-3" style={{background: props.mode == 'dark' ? 'dark' : 'light'}}>
        <h1 className="text-center my-3">{props.headingText}</h1>
        <div className='row'>
          <div className='col-md-6 '>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.labelText}</label>
            <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <div className='col-md-6'>
          <h6>Preview</h6>
              <textarea disabled value={preview} className="form-control" id="exampleFormControlTextarea1" rows="10">
              </textarea>
          </div>
          <div className='row'>
            <div className='col-md-12'>
            <button disabled={text.length==0} className="btn btn-sm btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length==0} className="btn btn-sm btn-success my-2 mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
            <button disabled={text.length==0} className="btn btn-sm btn-danger my-2 mx-1" onClick={handleEmpClick}>Clear</button>
            <button disabled={text.length==0} className="btn btn-sm btn-danger my-2 mx-1" onClick={handleExtraSpacesClick}>Remove extra spaces</button>
            <button disabled={text.length==0} className="btn btn-sm btn-secondary my-2 mx-1" onClick={handleCopyClick} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">Copy to clipboard</button>
            <button disabled={text.length==0} className="btn btn-sm btn-secondary my-2 mx-1" onClick={handleCapitalizeFirstLetterClick} >Capitalize first letter</button>
             </div>
          </div>
        </div>
       
       <div className='row'>
        <div className="col-md-12 mt-3">
        <h2>Summary</h2>
            <p>Number of words <b>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length}</b> Number of characaters <b>{text.length}</b></p>
        </div>
       </div>
      </div>

    </>
  )
}

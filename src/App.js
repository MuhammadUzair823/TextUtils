import { useState, useSyncExternalStore } from 'react';
import { render } from "react-dom";
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm  from './Components/TextProgram';
import Alerts  from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      showAlert(null)
    }, 3000)
  }

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.background = '#64676a';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }

  }
  
  return (
    <>
    <Router >
      <Navbar logoName="Text Utils" homeText = "Home" aboutText = "About" dropdownText = "Drop" child1 = "Action" child2 = "Another Action"
      child3 = "Something else here" disabledText = "Disabled" searchText = "Search" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
          <Switch>
            <Route path="/about" component={About} >
              <About mode={mode}/>
            </Route>
            <Route  path="/">
              <TextForm headingText="Text Analyze Program" labelText="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
            </Route>
          </Switch>
     </Router>
      
    </>
  );
}

export default App;

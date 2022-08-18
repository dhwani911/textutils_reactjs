// USE CTRL+K+C for comment in reactjs
//import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

// eslint-disable-next-line

 /*import BELOW lines of code from react-router-dom documentation */
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');       // whether mode is light or dark
  
  const [alert,setAlert] = useState(null);       // whether mode is light or dark

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }                                           //PASS THIS AS alert.msg, alert.type

   /* BELOW LOGIC IF FOR CHANGEING THE BACKGROUND COLOR OF PAGE */ 
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success') 
  // }
// remove the previoud changed background of body class 

  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   console.log(cls)                         // removed old background and add new background color
  //   document.body.classList.add('bg-'+cls)
  //  if(mode === 'light'){
    
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
        //document.title = "TextUtils - Dark Mode";
        //setInterval(() => {      {/*THIS IS ONLY FOR UNDERSTANDING. IF YOU WANT TO BLINK SOMETHING FOR 1-2 SECONDS USE THIS setInterval()*/}
        //    document.title = "TextUtils  is Amazing";
        //}, 2000);
        //setInterval(() => {
        //    document.title = "Install TextUtils";
        //}, 1500);
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
      //  document.title = "TextUtils - Light Mode";
    }
  }

  return (
    // <>       
    // <h1>this is me</h1>
    // <div className="App">                                  //THIS <DIV> BLOCK IN INBUILT 
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // </>                                // If you're using more than 2 lines than use <> and </> to create jsx, otherwise it'll give an error

                        /* LET'S CREATE OUR CODE */
    //<div className='blank'>lovely</div>
    // Props meaning here inside component<navbar> we have given properties(props) like title and aboutText

    <>       
    <Router>
    <Navbar title ="textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>                                  {/* GITHUB dowsnot work well with react-router so we have comment the code */}
          {/* /users --> Component 1
        /users/home --> Component 2 */}
      <Route exact path="/about" element={<About mode={mode} />}></Route>
      <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces"  mode={mode} />}> </Route>
    </Routes>
    </div>
    </Router>              
    {/* <Textform showAlert={showAlert} heading="Enter the text"  mode={mode} /> */}
    {/* <Navbar title ="textutils" aboutText="Abouting" />
    {/*Default props will automatically appear evenif you dont write here*/}
    {/*mode variable is created for light or dark modeintoNavbar using Usestate method */}
    </> 
    
  );
}

export default App;

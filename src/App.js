// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React ,{useState} from 'react';


import {
  BrowserRouter as router,
  
  Routes,
  Route

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert('Light mode has been enabled', 'success')
    }
    
  }
  return (
    <>
    
    {/* <Navbar title ="TextUtils"/> */}
    
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
    <div className="container">
    <router>
    <Routes>
         <Route path='/about' element={<About mode={mode}/>}/>
          
          <Route path='/'  element={<TextForm heading ="Enter text to analyze" showAlert = {showAlert} mode={mode} />}/>
          
    </Routes>
    </router>
          
    </div>
    
    
    
    </>
    
  );
  
}

export default App;



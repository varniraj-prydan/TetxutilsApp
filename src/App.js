import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import FormTxt from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [mode1, setMode1] = useState("light");

  const [txtClr, setTxtClr] = useState("dark")
  const [alert, setAlert] = useState({ message: '', type: '' });
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 5000);






  const toggleMode = (num) => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.title = "TextUtils - DarkMode";
    }
    else {
      setMode('light');
      document.title = "TextUtils - Home"
    
      document.body.style.backgroundColor = '#eae9e0';
      // }else if(mod==2){
      //   document.body.style.backgroundColor = '#eae9e0'
      // }

    }


  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}  />


            <Alert alert={alert}/> 
        
        <div className='container my-3'>
        
          <Routes>
            <Route path="/" element={<FormTxt heading="The text Area" mode={mode} mode1={mode1} alert={alert} fun={setAlert} />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        
      </div>
        
      </Router>
    </>

  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
// const removeBodyClasses = () => {
//   document.body.classList.remove('bg-light','bg-dark','bg-primary', 'bg-danger', 'bg-success', 'bg-warning');
// }
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.remove('bg- ' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtils - Dark Mode';
      // Remove repeated intervals
      // setInterval(() => { document.title = 'TextUtils is Amazing'; }, 2000);
      // setInterval(() => { document.title = 'Install TextUtils Now'; }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
     // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <Router>
      <Navbar title='Textutils' aboutText='about us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}  />
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

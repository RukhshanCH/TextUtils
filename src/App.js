import { useState } from 'react'
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import Textarea from './Components/Textarea'
import About from './About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  
  
  const [mode, setmode] = useState("light")
  const changemode = () => {
    if (mode==='light') {
      document.body.style.background = '#2c3138'
      document.body.style.color = 'white'
      setmode('dark')
      showalert("Dark mode has been enabled", "Success")
    }
    else {
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      setmode('light')
      showalert("Light mode has been enabled", "Success")
    }
  }

  const[alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert ({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggle={changemode} />
      <Alert alert={alert} />
      <div className='container  my-3'>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Textarea showalert={showalert} alert={mode} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

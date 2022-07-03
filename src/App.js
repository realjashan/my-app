import './App.css';
import Navbar from './components/Navbar'; 
import Textform from'./components/Textform';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import React, {useState } from 'react'
import PopUp from './components/PopUp';
 
// import{
// BrowserRouter as Router,
//  Route,
//  Switch,
// Link,

// } from "react-router-dom";   
 




 
function App() {
  const [mode ,setMode] = useState('light');
  const [alert ,setAlert] = useState(null);
  
const showAlert=(message,type)=>{
 setAlert({
  msg:message,
  type:type,
 })
setTimeout(() => {
  showAlert(null);
}, 2000);
}
  

  const toggleMode=()=>{
if(mode==='light'){
setMode('dark')
document.body.style.backgroundColor='#042743';
showAlert("Dark Mode Has Been Enabled","danger");
}
else{
  setMode('light')
  document.body.style.backgroundColor='white';
showAlert("Light Mode Has Been Enabled","success");

}
  }

 
  return (
    <>
 {/* <Router> */}

   <Navbar title="TextAdd" AboutText="About TextAdd" mode={mode} toggleMode={toggleMode}/>
   <PopUp alert={alert}/>
   <div className="container">
 
   
    {/* <Switch> */}
    {/* <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/home">
   
      

    </Route>
     
 
    </Switch> */}
     <Textform mode={mode} showAlert={showAlert}/>
   </div>
   {/* </Router> */}
    </>
  );
}
export default App;
 

 

import './App.css';
import React, {useEffect, useState} from 'react' 
import Navbar from './components/Navbar'
import Cards from './components/Cards'
// import Dark from './components/Dark'
// import Alert from './components/Alert'
// import Text from './components/Text'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
// function App() {
  // const [mode, setmode] = useState('light');
  // const toggleMode =()=>{
  //       if(mode==='light')
  //       {
  //       setmode('dark');
  //       document.body.style.backgroundColor='grey';
  //       }
  //       else
  //       {
  //       setmode('light');
  //       document.body.style.backgroundColor='white';
  //       }
  //     }
//   return (
//     <>
//     <div>
//       <Navbar title="TitleUtils"/>
//     </div>
//     </>
//   );
// }



function App() {
  // const [alert, setalert] = useState(null);
  // document.body.style.backgroundColor='wheat';
  const toggleMode =()=>{
   
    if(mode==='light')
    {
    setmode('dark');
     document.body.style.backgroundColor='wheat';
    // showAlert("Success: ", "Entered in dark mode");
    }
    else
    {
    setmode('light');
     document.body.style.backgroundColor='skyblue';

    // showAlert("Success: ", "Entered in light mode");
    }
  }
  
  const [mode, setmode] = useState('light');

  // const showAlert = (type, message)=>{
  //     setalert({
  //       type: type,
  //       message: message
  //     })
      
  // }

  // const data = useEffect({

  // }, [])
  return (
    <>
    
     <Router> 
      {/* <Navbar title="TitleUtlis" style={{backgroundColor: 'green'}}/> */}
      <Navbar title="Home" mode={mode} toggleMode = {toggleMode}/> 
      <Cards/>
   {/* <Alert alert={alert}/>  */}
   <div className="container">
    
    {/* <Text heading="Enter your text here" mode={mode}/> */}
    {/* <Dark/> */}
   {/* <Dark/> */}
    {/* <Routes> */}
         {/* <Route path="/" element={<Layout />}>  */}
           {/* <Route path="/about" element={<Dark/>} />
          <Route path="/" element={<Text heading="Write context here" mode={mode}/>} />  */}
         {/* </Route>  */}
       {/* </Routes>  */}
   </div>
    </Router> 
  </>
  );
}
console.log("HII");
export default App;
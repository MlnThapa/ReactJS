import './App.css';
import Landing from './components/Landing';
import SecondSec from './components/SecondSec';
import Customcursor from './components/Customcursor';
import Aboutme from './components/Aboutme'
import Skills from './components/Skills';
import Contact from './components/Contact'

import {useState} from 'react';
 
function App() {
  const [value,setValue]=useState(0);
  return (
    <div className="App">
         <Landing setValue={setValue}/>
         <SecondSec setValue={setValue}/>
         <Aboutme/>
         <Skills />
         <Contact />
         <Customcursor value={value}/>
    </div>
  );
}

export default App;

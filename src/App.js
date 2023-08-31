import React from "react";
import About from './Routes/About';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import {Routes , Route} from "react-router-dom";




const App = () => {
  return (
    <>
    <Routes>
       <Route path="/" Component={Home} />
       <Route path="/about" Component={About} />
       <Route path="/contact" Component={Contact} />
       <Route path="/project" Component={Project}/>
    </Routes>
    </>
  );
}

export default App;

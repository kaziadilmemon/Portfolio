import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import Home from './pages/Home.js'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Project from './pages/Project';
import Contact from './pages/Contact';
// import publication 
 import Publication from './pages/Publication';
 // importg services page
 import Servicespage from './pages/Servicespage';
  

function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
              {/* home page */}
            <Route path='/' element={<Home />}></Route>  
            {/* about page  */}
            <Route path='/about' element={<About />}></Route>
            {/* project page */}
            <Route path='/project' element={<Project />}></Route>
            {/* services page */}
            <Route path='/servicespage' element={<Servicespage />}></Route>
            {/* publication page */}
            <Route path='/publication' element={<Publication />}></Route> 
            {/* contact page */}
            <Route path='/contact' element={<Contact />}></Route>
            

           
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import adarshresume from '../assets/Adarsh_Thakur_resume.pdf'
const Header = () => {
    const [first, setfirst] = useState(window.scrollY);
    const [show,setshow]=useState(true);
    const changeNavBar=()=>{
        console.log(window.scrollY);
        if(first<window.scrollY){
            setshow(false);
        }
        else
        {
            setshow(true);
        }
        setfirst(window.scrollY);
    }

    window.addEventListener('scroll',changeNavBar);
    
  return (<nav style={{ transform: `translateY(${show ? '0' : '-100%'})`, transition: 'transform 0.3s linear', }}>
    <NavContent/>
    </nav>)
  

}
const slideToSection = () => {
    const section = document.getElementById('home');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
const NavContent=()=>(
    <>
        <h2 onClick={slideToSection} className='underline-hover-name'>Adarsh Thakur</h2>
        <div>
            <a className='underline-hover' href="#skills">Skills</a>
            <a className='underline-hover' href="#projects">Projects</a>
            <a className='underline-hover' href="mailto:adarshthakur1106@gmail.com">Contact</a>
        </div>
        <a href={adarshresume} target='blank' >
        <button>Resume</button>
        </a>
    </>
)

export default Header
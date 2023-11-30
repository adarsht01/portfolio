import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import nodejs from '../assets/node-js.png'
import react from '../assets/react.png'
import sass from '../assets/sass.png'
import redux from '../assets/redux.svg'
import mongodb from '../assets/mongodb.png'
import sql from '../assets/sql.png'
import express from '../assets/express.png'
import chakra from '../assets/chakra.png'
import crypto from '../assets/crypto.png'
import weather from '../assets/weather.png'
import watchbox from '../assets/watchbox.png'
import mallmart from '../assets/mallmart.png'
import keeper from '../assets/keeper.png'

import {FiGithub,FiInstagram,FiLinkedin} from 'react-icons/fi'
import adarshresume from '../assets/Adarsh_Thakur_resume.pdf'

import {HiMiniArrowTopRightOnSquare} from 'react-icons/hi2'
import {motion} from "framer-motion"
import TypewriterComponent, { TypewriterClass } from 'typewriter-effect'
const img='https://static.vecteezy.com/system/resources/previews/011/153/360/original/3d-web-developer-working-on-project-illustration-png.png'


const Card1=({imgsrc})=>{
     return<div className='Card1'>
        <img src={imgsrc}alt="html" srcset="" width={"69px"}/>
    </div>
}
const Card2=({imgsrc})=>{
     return<div className='Card2'>
        <img src={imgsrc}alt="html" srcset="" width={"69px"}/>
    </div>
}
const Procard=({imgsrc,heading,githublink,livelink,techstacks})=>{
    return(
        <div className="procard">
            <div className="proimg">
            <img width={'335px'} height={'190px'} src={imgsrc} alt={heading}  />
            </div>
            <div className="description">
                <div className="firstline">
                    <h2>{techstacks}</h2>
                    <a href={githublink} target='blank'><FiGithub/></a>
                    <a href={livelink} target='blank'><HiMiniArrowTopRightOnSquare /></a>
                </div>
                <div className="headingproject">
                <h1 >{heading}</h1>
                </div>
            
            </div>
        </div>
    )
}
const Home = () => {
  return (
    <div id='home' className='home'>
    <section className='first'>
        <div className='home-text'>
        <p>Hi, My name is</p>
        <h1>Adarsh Thakur.</h1>
        <h2>
        <TypewriterComponent
        options={{
            strings:["I am a web Developer","I am a web Designer"],
            autoStart:true,
            loop:true,
            cursor:"_",
        }}
        >
        </TypewriterComponent>
        love to create visually pleasing web applications with strong backend
        </h2>
        <p className='aboutp'>
        Hello, I'm  a final year B.Tech student majoring in electronics and communication with a passion for coding and full-stack web development. I'm driven to explore diverse tech stacks

My main focus these days is learning web development and grab a decent job.
        </p>
        <a href={adarshresume} target='blank' >
        <button>Resume</button>
        </a>
        </div>
        <div className='home-img'>
        <img src={img} height={"400rem"} width={"400rem"} alt="" />
        </div>
    </section>
    <section id='skills' className='second'>
           <div className="heading-second">
            <h1>Skills</h1>
           </div>
           <div className="images">
            <Card1 imgsrc={html}/>
            <Card2 imgsrc={css}/>
            <Card1 imgsrc={javascript}/>
            <Card1 imgsrc={react}/>
            <Card2 imgsrc={redux}/>
            <Card1 imgsrc={sass}/>
            <Card2 imgsrc={nodejs}/>
            <Card1 imgsrc={mongodb}/>
            <Card2 imgsrc={sql}/>
            <Card1 imgsrc={express}/>
            <Card2 imgsrc={chakra}/>
            
            
            
           </div>
    </section>
    <section id='projects' className='third'>
    <div className="projectheading">
        <h1>My Projects</h1>
    </div>
    <div className="projects">
        <Procard imgsrc={crypto} techstacks={'HTML | CSS | JavaScript | ReactJS | ChakraUI | API'} githublink={'https://github.com/adarsht01/crypto-exchange'} livelink={'https://crypto-exchange-5s7qjk15a-adarsh-thakurs-projects.vercel.app/'} heading={'Crypto Exchange'}/>
        <Procard imgsrc={weather} techstacks={'HTML | CSS | JavaScript | API'} githublink={'https://github.com/adarsht01/weather-report'} livelink={'https://adarsht01.github.io/weather-report/'} heading={'Weather Report'}/>
        <Procard imgsrc={watchbox} techstacks={'HTML | CSS | JavaScript | ReactJS | ChakraUI '} githublink={'https://github.com/adarsht01/WatchBox'} livelink={'https://watchbox-6ncg6x3zf-adarsh-thakurs-projects.vercel.app/'} heading={'Watch Box'}/>
        <Procard imgsrc={mallmart} techstacks={'HTML | CSS | JavaScript | ReactJS | Redux'} githublink={'https://github.com/adarsht01/mallmart'} livelink={'https://cart-q3h896dlu-adarsh-thakurs-projects.vercel.app/'} heading={'MallMart'}/>
        <Procard imgsrc={keeper} techstacks={'HTML | CSS | JavaScript | ReactJS'} githublink={'https://github.com/adarsht01/Keeper'} livelink={'https://adarsht01.github.io/Keeper/'} heading={'Keeper'}/>
        
    </div>
    </section>
    <section className='fourth'>
        <footer>
        <div>
        <a className='footer-logo' href='https://github.com/adarsht01' target='blank'><FiGithub/></a>
        <a className='footer-logo' href='https://www.linkedin.com/in/adarshthakur11/' target='blank'><FiLinkedin/></a>
        <a className='footer-logo' href='https://www.instagram.com/adarsht_01/?hl=en' target='blank'><FiInstagram/> </a>
    </div>
        </footer>
    </section>
    </div>
  )
}

export default Home
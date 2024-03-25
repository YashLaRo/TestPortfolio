import logo from './logo.svg';
import Photo_1 from './photo_1.jpg';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bootstrap } from 'bootstrap';

import {ContactForm} from './components/ContactForm';
import Typed from "typed.js"
import React from 'react';
import { NavBar } from './components/Navbar';
import { MyInfo } from './components/MyInfo';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { ProjectInfo } from './components/ProjectInfo';

function App() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };




  return (
    <>
      <header>
        <NavBar></NavBar>
      </header >
        <MyInfo></MyInfo>
        <ProjectInfo></ProjectInfo>
        <Skills></Skills>
        <AboutMe></AboutMe>


      
      <ContactForm ></ContactForm>

    </>
  );


}

export default App;

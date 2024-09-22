import React from 'react'
import Navbar from './components/Pages/Navbar';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import gulabJamun from '../src/Assets/Gulab Jamun.jpeg';
import img1 from '../src/Assets/0615e99e-5aaa-47bd-844d-1adc3c015cef.jpg';
import img2 from '../src/Assets/Coffee Wallpaper.jpeg';
import img3 from '../src/Assets/download (74).jpeg';
import Contactme from './components/Pages/Contactme';
import Footer from './components/Pages/Footer';

  const App = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of project one.',
      image:gulabJamun,
      link: 'https://example.com/project-one',
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two.',
      image: img1,
      link: 'https://example.com/project-two',
    },
    {
      title: 'Project Three',
      description: 'A brief description of project two.',
      image: img2,
      link: 'https://example.com/project-two',
    },
    {
      title: 'Project four',
      description: 'A brief description of project two.',
      image: img3,
      link: 'https://example.com/project-two',
    },
    // Add more projects as needed
  ];



  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects projects={projects} />
      <Contactme/>
      <Footer/>
    </div>
  )
}

export default App;
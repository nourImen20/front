import React from 'react'
import './home.scss';
import {Navbar, Slider, Toparticles} from '../../components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <div className='container'>
    <Toparticles/>
    
    </div>
    </>
  )
}

export default Home
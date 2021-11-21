import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './../components/Footer';

function Home() {
    return (
        <section className="padding-top-30">

<div class="container">
<div class="slider three">
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content">
            <div class="row">
    <div class="col sm-12 md-4 lg-4 ">
      <img src="/images/12.jpg" class="round-edge responsive" />
    </div>
    <div class="col padding-20 sm-12 md-8 lg-8 ">
     <div class="text-big montserrat padding">Modern Responsive Css framework</div>
     <div class="padding text-larger">
       Funcss is a modern responsive css framework which uses css grid to create responsive 
       website layout.
     </div>
    </div>
    </div>
    
            </div>

        </div>
        <div class="slide">
            <div class="slide-content">
            <div class="row">
    <div class="col sm-12 md-4 lg-4 ">
      <img src="/images/13.jpg" class="round-edge responsive" />
    </div>
    <div class="col padding-20 sm-12 md-8 lg-8 ">
     <div class="text-big montserrat padding">Reduce Coding Stress</div>
     <div class="padding text-larger">
     Funcss come with build-in css classes, just specify the class name and funcss will do the rest for you.
     </div>
    </div>
    </div>
            </div>
        </div>
        <div class="slide">
        <div class="slide-content">
        <div class="row">
    <div class="col sm-12 md-4 lg-4 ">
      <img src="/images/14.jpg" class="round-edge responsive" />
    </div>
    <div class="col padding-20 sm-12 md-8 lg-8 ">
     <div class="text-big montserrat padding">Build Nice Designs</div>
     <div class="padding text-larger">
      Create awesome web design using funcss, build impressive website with just little effort.
     </div>
    </div>
    </div>
        </div>
        </div>
    </div>
    <div class="dot-container">
            <i class="fas fa-circle dot one"></i>
            <i class="fas fa-circle dot two"></i>
            <i class="fas fa-circle dot three"></i>
    </div>
</div>
</div>

      <div className="container">
      <center><h1 class="text-bigger text-pink no-margin">Fun Css</h1></center>
<div class="text-x-large text-center container  text-lighter">
Modern responsive CSS framework for developing responsive websites.
</div>
<div class="flex">
    <div class="flex-50">
        <div class="padding">
        <Link to="/gettingstarted"><button class="button width-100-p text-white indigo card  text-larger poppins">
          Getting Started
          <i class="fas fa-angle-right margin-left-10"></i>
          </button></Link>
        </div>
  </div>
    <div class="flex-50">
        <div class="padding">
        <a href="https://codeload.github.com/funtechs/Funcss/zip/refs/heads/main">
        <button class="button green width-100-p text-larger deep-purple card text-white  padding poppins">
        <i class="fas fa-download icon margin-right-10"></i> 
      Download v1.0 
        </button>
      </a>
        </div>
  </div>

</div>
      </div>

<div className="section hr"></div>

<div className="container">
<div className="text-center text-x-large text-lighter text-indigo">Our Themes</div>
<div className="text-center text-larger">Free Css Themes</div>
<div className="text-center text-medium text-lighter padding">Download and use our Themes for free, Build cool websites with Funcss.</div>
<div class="slider three">
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content">
            <img src="/themes/1.jpg" class="responsive" alt="company theme" />
            </div>

        </div>
        <div class="slide">
            <div class="slide-content">
            <img src="/themes/2.jpg" class="responsive" alt="company theme" />
            </div>
        </div>
        <div class="slide">
        <div class="slide-content">
        <img src="/themes/3.jpg" class="responsive" alt="company theme" />
        </div>
        </div>
   
    </div>

</div>
</div>

<div className="section hr"></div>

<div className="container">
<div className="text-center text-xx-large text-lighter text-indigo">Responsive</div>
<div class="text-x-large text-center">Responsive Grid Layout.</div>
<div className="padding-20">
    Create awesome responsive websites with css flex-box and media queries.
    Our framework partition your website in to columns and rows which are 
    responsive to fit all screen sizes.
</div>
<div class="padding-20">
<Link to="/grid"><button class="fun-secondary button card text-white f2">
  Learn More
  <i class="fas fa-angle-right margin-left-10"></i>
  </button></Link>
</div>
<div className="container text-center">
<img src="/svg/devices.svg" className="width-100-p" />
</div>
</div>

<Footer />

        </section>
    );
}

export default Home;
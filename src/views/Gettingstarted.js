import React from 'react';
import { BrowserRouterasRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from './../components/Logo';
import {Helmet} from "react-helmet"
function Gettingstarted() {
    const cdn = {
        csscompiled:`
        <!-- Compiled and minified css -->
        `,   
        css:`
        <link rel="stylesheet" href="https://funcss.netlify.app/css/fun.css />
        `,
      
        jscompiled:`
        <!-- compiled and minified js -->
        `,
      
        js:`
        <script src="https://funcss.netlify.app/js/fun.js"></script>
        `,
    }
    return (
        <section>

          <Helmet>
            <title>Funcss Getting Started</title>
          <meta name='description' content='
        Getting started with funcss framework, download the funcss framework
        for free and begin creating your dream projects.
    ' />
    <meta
    name="keywords"
    content="fun, css, download, frame work"
    />
          </Helmet>
                        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
     <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#cdn" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">CDN</div></a>
               <a href="#downloadzip" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Download Zip</div></a>
               <a href="#githubcli" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Github CLI</div></a>
               <a href="#ssh" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">SSH</div></a>
               <a href="#https" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">HTTPS</div></a>
  
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="text-big text-lighter text-indigo">
                 Getting Started
             </div>
             <div className="header-2">
                Website design is easy using <br /> fun css.
             </div>
             <div className="section hr"></div>
            </div>

     
            <div className="container" id="cdn">
             <div className="header-2 text-indigo">
                 Using CDN
             </div>
             <div className="body-1">
               You can start using Fun css by coping the CDN and paste it in your head tag.
             </div>
             <div className="note">
               <div className="note-title">Note</div>
               <div>
                   You can use the CDN for development mode, test purposes and learning.
                   It is not recommended to use the CDN for production purpose. Download and use
                   the fun css files for production mode.

               </div>
               </div>

               <div>
               <div class="code padding-top-50">
                 <div className="monospace ">{cdn.csscompiled}</div>
                 <div className="monospace ">{cdn.css}</div>
                 <div className="monospace padding-top-10">{cdn.jscompiled}</div>
                 <div className="monospace padding-top-10">{cdn.js}</div>
               </div>
               </div>
    
    </div>

    <div className="container" id="downloadzip">
      <div className="header-2 text-indigo">
            Download
       </div>
<div className="body-1">
You can use the link below to download our framework files or you can clone the git repo. It is recommended to use the downloaded files 
when creating a website or web application for production purpose.
</div>

<div>
   <a href="https://codeload.github.com/funtechs/Funcss/zip/refs/heads/main">
   <button className="button text-white hover-up margin-top-20 card indigo ripple">Download Fun Css</button> 
   </a>
</div>
  

<div class="padding-top-20" id="githubcli">

<div className="header-2 text-indigo">Clone The Framework</div>
<div>
<div className="text-large">Github CLI:</div>
<div className="code">
<xmp>
gh repo clone funtechs/Funcss
</xmp>
</div>   
</div>

<div id="ssh">
<div className="text-large">SSH:</div>
<div className="code">
<xmp>git@github.com:funtechs/Funcss.git</xmp>
</div>   
</div>

<div id="https">
<div className="text-large">HTTPS:</div>
<div className="code">
<xmp>https://github.com/funtechs/Funcss.git</xmp>
</div>   
</div>

</div>

</div>
   
   <Footer />

                </div>

              </div>
    </section>


        
    );
}

export default Gettingstarted;
import React from 'react';
import Footer from './../components/Footer';

function Grid() {
    const grid = `
    <div class="row">
    <div class="col margin-top-20 padding sm-12 md-6 lg-6 light height-100">sm-12 md-6 lg-6</div>
    <div class="col margin-top-20 padding sm-12 md-6 lg-6 green height-100">sm-12 md-6 lg-6</div>
    <div class="col margin-top-20 padding sm-6 md-6 lg-4 green height-100">sm-6 md-6 lg-4</div>
    <div class="col margin-top-20 padding sm-6 md-6 lg-8 light height-100">sm-6 md-6 lg-8</div>
    <div class="col margin-top-20 padding sm-12 md-12 lg-12 light height-100">sm-12 md-12 lg-12</div>
    
    </div>
    `
    return (
        <section>
        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#responsiveness" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Reponsive Grid</div></a>
               <a href="#layout" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Layout</div></a>
               <a href="#note" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="text-bigger text-lighter text-indigo">
                Grid
             </div>
             <div className="header-3">
                Grid make your website much more<br /> responsive.
             </div>

             <div className="section hr">
   
             </div>
            </div>

            <div className="container" id="introduction">
                <div className='note'>
                Fun Grids is a modern responsive grid layout for developing websites.
                The grid system partition your device width in to 12 sections. Each section covers a width of 8.33333% of your device width.

                </div>

                <div className="note">
                <div>To use our grid system, you must create an html element with the class name of row. 
      Then you can create columns inside the row using the <span class="badge">col</span> class. <br />
      Our framework divides you screen into 12 sections in which every 8.33333% of you screen width makes a section <br />
      Therefore one section makes up 8.33333% with six section covering 49.33333% of your screen, or half of you screen. <br />
      12 sections covers 99.33333% of your screen. <br />
      <span class="badge">sm-sections</span>This shows how many sections the element will cover in small screens. <br />
      <span class="badge">md-sections</span>This shows how many sections the element will cover in medium screens. <br />
      <span class="badge">lg-sections</span>This shows how many sections the element will cover in large screens.
    </div>
                </div>
            </div>

            <div className="container">
            <table class="table text-smaller stripped">

    <tr>
        <td>Class</td>
        <td>discription</td>
        <td>syntax</td>
    </tr>
 
    <tr>
            <td>.row</td>
            <td>creating grid rows</td>
            <td><div> class = "row"</div></td>
        </tr>
        <tr>
            <td>.col</td>
            <td>creating grid columns.</td>
            <td><div> class = "hover-col"</div></td>
        </tr>
        <tr>
            <td>sm</td>
            <td>
                How many columns the grid will cover on  small screen. (Mobile phones)
            </td>
            <td><div> class = "sm-value"</div></td>
        </tr>
        <tr>
            <td>md</td>
            <td>
            How many columns the grid will cover on  medium screen. (Tablet)
            </td>
            <td><div> class = "sm-value"</div></td>
        </tr>
        <tr>
            <td>lg</td>
            <td>
            How many columns the grid will cover on large screen. (Laptop)
            </td>
            <td><div> class = "sm-value"</div></td>
        </tr>
 
</table>

<div class="row padding-top-20">
    <div class="col lg-1 sm-1 md-1 pink">1</div>
    <div class="col lg-1 sm-1 md-1 green">2</div>
    <div class="col lg-1 sm-1 md-1 pink">3</div>
    <div class="col lg-1 sm-1 md-1 green">4</div>
    <div class="col lg-1 sm-1 md-1 pink">5</div>
    <div class="col lg-1 sm-1 md-1 green">6</div>
    <div class="col lg-1 sm-1 md-1 pink">7</div>
    <div class="col lg-1 sm-1 md-1 green">8</div>
    <div class="col lg-1 sm-1 md-1 pink">9</div>
    <div class="col lg-1 sm-1 md-1 green">10</div>
    <div class="col lg-1 sm-1 md-1 pink">11</div>
    <div class="col lg-1 sm-1 md-1 green">12</div>
</div>

            </div>


<div class="container padding-top-40" id="responsiveness">
    <div class="header-3 text-indigo">Responsive Grid</div>
    <div class="code">
        <xmp>
            {grid}
        </xmp>
    </div>
    <div class="preview">
 <h3 className="hide-small text-lighter">Shrink your browser to see the effect</h3>
    <div class="row text-white">
<div class="col padding sm-12 md-6 lg-8 indigo height-50">sm-12 md-6 lg-8</div>
<div class="col padding sm-12 md-6 lg-4 deep-purple height-50">sm-12 md-6 lg-4</div>
</div> 

    </div>
</div>
<div class="container padding-top-40" id="layout">
<div class="header-3 text-indigo">Grid Layout</div>
    <div class="code">
        <xmp>
            {grid}
        </xmp>
    </div>
    <div class="preview">

    <div class="row">
<div class="col padding sm-12 md-12 lg-12 light  border"> Navigation bar </div>
<div class="col padding sm-12 md-12 lg-6 light border"> 
<div class="text-center">Body One</div>

<div class="section padding">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
</div>
 </div>
<div class="col padding sm-12 md-12 lg-6 light border"> 
<div class="text-center">Body Two</div>
<div class="section padding">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
</div>
 </div>

 <div class="col padding sm-12 md-12 lg-12 light  border"> Footer </div>
</div> 

    </div>
</div>


<div class="container padding-top-40" id="note">
    <div class="note">
        <div class="note-title">Note</div>
        <div>
Using grid system makes your website responsive to fit all screen size.
        </div>
    </div>
</div>

<Footer />

        </div>
        
        </div>

        </section>
    );
}

export default Grid;
import React from 'react';
import Footer from './../components/Footer';

function Input() {
    return (
        <section>
             <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#simpleCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Card</div></a>
               <a href="#imageCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Image Card</div></a> 
               <a href="#fabCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Fab In Card</div></a>
               <a href="#horizontalCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Horizontal Card</div></a>
               <a href="#cardReveal" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Card Reveal</div></a>
               <a href="#flipCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Flip Card</div></a>
            </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="text-big text-lighter text-indigo">
                Input
             </div>
             <div className="header-3">
               Cool Buttons Makes Your Website<br /> Reactive.
             </div>

             <div className="section hr">
    
             </div>
            </div>

            
 <div class="container padding-top-40" id="topPanel">
    <div class="header-3 text-indigo">Simple</div>
    <div class="code">
        <xmp>
            {`
<input class="input full-width padding" placeholder="This is a simple input field." />
            `}
        </xmp>
    </div>
    <div class="preview">

<div class="card padding">
<div class="text-larger padding">Simple Input Field</div>
<input class="input full-width padding" placeholder="This is a simple input field." />
</div>      

    </div>
</div>
            
 <div class="container padding-top-40" id="topPanel">
    <div class="header-3 text-indigo">Bordered</div>
    <div class="code">
        <xmp>
            {`
<input class="input full-width padding" placeholder="This is a simple input field." />
            `}
        </xmp>
    </div>
    <div class="preview">

<div class="card padding">
<div class="text-larger padding">Bordered Input Field</div>
<input class="input full-width bordered padding" placeholder="This is a bordered input field." />
</div>      

    </div>
</div>
            
 <div class="container padding-top-40" id="borderlessinput">
    <div class="header-3 text-indigo">Borderless Input Field</div>
    <div class="code">
        <xmp>
            {`
<input class="input full-width borderless light padding" placeholder="This is a borderless input field." />
            `}
        </xmp>
    </div>
    <div class="preview">

<div class="card padding">
<div class="text-larger padding">Borderless Input Field</div>
<input class="input full-width borderless light padding" placeholder="This is a borderless input field." />
</div>      

    </div>
</div>
 <div class="container padding-top-40" id="roundedinput">
    <div class="header-3 text-indigo">Rounded Input Field</div>
    <div class="code">
        <xmp>
            {`
<input class="input full-width round-30 light padding" placeholder="This is a rounded input with border-radius 15" />
            `}
        </xmp>
    </div>
    <div class="preview">

<div class="card padding">
<div class="text-larger padding">Rounded Input Field</div>
<input class="input full-width round-30 light padding" placeholder="This is a rounded input with border-radius 15" />
</div>      

    </div>
</div>
 <div class="container padding-top-40" id="roundedinput">
    <div class="header-3 text-indigo">Animated Input Field</div>
    <div class="code">
        <xmp>
            {`
<input class="input bordered light animate-width padding" placeholder="view full width."/>            `}
        </xmp>
    </div>
    <div class="preview">

<div class="card padding">
<div class="text-larger padding">Animated Width</div>
<input class="input bordered light animate-width padding" placeholder="view full width."/>
</div>      

    </div>
</div>

<Footer />

</div>
</div>
        </section>
    );
}

export default Input;
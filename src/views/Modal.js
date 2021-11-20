import React from 'react';
import { useState } from 'react';
import Footer from './../components/Footer';

function Modal(props) {
    const [modal, setmodal] = useState("none");
    const modalstyle = "`${modal}`"
    return (
        <div>
                    <section>
        <div className="content-wrapper">
       <div className="sub-content padding">
        <div className="border padding height-200 content-middle light">
        Ads
        </div>
        <div className="section">
          <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
          <a href="#modal" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Modal</div></a> 
          <a href="#note" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>         </div>
       </div>
           <div className="main-content">
           <div className="container">
        <div className="text-big text-lighter text-indigo">
           Modal
        </div>
        <div className="header-3">
          Modals are can be use to show information on <br /> popup.
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div class="container padding-top-40" id="introduction">
<div class="header-3 text-indigo">Modal</div>
<div class="note">
    The <span class="badge">modal</span> class is use to create a modal.It wraps the <span class="badge">modal-content</span> class.
    which contains the content of your modal
</div>
<div class="code">
   <xmp>
{`<button class="button indigo text-white card" onclick="document.getElementById('modal1').style.display='block'">basic Modal</button>
<div class="modal" id="modal1">
<div class="close-modal text-bigger text-red" onclick="document.getElementById('modal1').style.display='none'">&times;</div>
<div class="modal-content width-400 indigo text-white padding">
<div class="h3">Modal Header</div>
<div>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
</div>
</div>
</div>`}
   </xmp>
</div>
<div class="code react">
   <xmp>
{`
import { useState } from 'react';
import Footer from './../components/Footer';
const App = ()=>{
const [modal, setmodal] = useState("none");
    return(
   <button className="button indigo text-white card" onClick={()=>setmodal("block")}>Open Modal</button>
   <div className="modal" style={{display:${modalstyle}}}>
   <div className="close-modal text-bigger text-red"  onClick={()=>setmodal("none")}>&times;</div>
   <div className="modal-content width-400 indigo text-white padding">
   <div className="h3">Modal Header</div>
   <div>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   </div>
   </div>
   </div>
    )
}
 `}
   </xmp>
</div>
<div class="preview" id="modal">
<button class="button indigo text-white card" onClick={()=>setmodal("block")}>Open Modal</button>
   <div class="modal" style={{display:`${modal}`}}>
   <div class="close-modal text-bigger text-red"  onClick={()=>setmodal("none")}>&times;</div>
   <div class="modal-content width-400 indigo text-white padding">
   <div class="h3">Modal Header</div>
   <div>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   </div>
   </div>
   </div>
</div>
</div>
 

<div class="container">
<div class="note" id="note">
    <div class="note-title">Note:</div>
    <div>
     Modals are good for Login forms, signup forms and displaying other relevant information to the user.
    </div>
</div>
</div>

<Footer />

</div>
</div>
   </section>
        </div>
    );
}

export default Modal;
import React from 'react';
import { useState } from 'react';
import Footer from './../components/Footer';
const icons = [
    {class:"fas fa-home",name:"home"},
    {class:"fab fa-facebook",name:"facebook"},
    {class:"fab fa-instagram",name:"instagram"},
    {class:"fab fa-twitter",name:"twitter"},
    {class:"fab fa-apple",name:"apple"},
    { class:"fab fa-youtube", name:"youtube"},
    { class:"fas fa-angle-double-down", name:"arrowdowndouble"},
    { class:"fas fa-angle-double-up", name:"arrowupdouble"},
    { class:"fas fa-angle-double-left", name:"arrowleftdouble"},
    { class:"fas fa-angle-double-right", name:"arrowrightdouble"},
    { class:"fas fa-angle-up", name:"angleup"},
    { class:"fas fa-angle-down", name:"angledown"},
    { class:"fas fa-angle-left", name:"angleleft"},
    { class:"fas fa-angle-right", name:"angleright"},
    { class:"fas fa-at", name:"at"},
    { class:"fas fa-award", name:"award"},
    { class:"fas fa-bars", name:"bars"},
    { class:"fas fa-bookmark", name:"bookmark"},
    { class:"far fa-bookmark", name:"bookmark"},
    { class:"fas fa-bell", name:"bellnotification"},
    { class:"far fa-bell", name:"bellnotification"},
    { class:"fas fa-blog", name:"blog"},
    { class:"fas fa-bolt", name:"flashbolt"},
    { class:"fab fa-buffer", name:"buffer"},
    { class:"fas fa-calendar", name:"calendar"},
    { class:"far fa-calendar", name:"calendar"},
    { class:"fas fa-adjust", name:"adjust"},
    { class:"fas fa-camera", name:"camera"},
    { class:"fas fa-envelope", name:"envelopemail"},
    { class:"far fa-envelope", name:"envelopemail"},
    { class:"fas fa-phone", name:"cellphone"},
    { class:"fas fa-check", name:"correctcheck"},
    { class:"fas fa-clock", name:"clock"},
    { class:"far fa-clock", name:"clock"},
    { class:"fas fa-cloud", name:"cloud"},
    { class:"fas fa-clone", name:"clone"},
    { class:"fas fa-comment", name:"comment"},
    { class:"far fa-comment", name:"comment"},
    { class:"fas fa-chalkboard", name:"chalkboard"},
    { class:"fas fa-copy", name:"copy"},
    { class:"far fa-copy", name:"copy"},
    { class:"fas fa-download", name:"download"},
    { class:"fas fa-edit", name:"edit"},
    { class:"far fa-edit", name:"edit"},
    { class:"fas fa-exclamation", name:"exclamation"},
    { class:"fas fa-eye", name:"eye"},
    { class:"far fa-eye", name:"eye"},
    { class:"fas fa-heart", name:"heart"},
    { class:"far fa-heart", name:"heart"},
    { class:"fas fa-image", name:"image"},
    { class:"far fa-image", name:"image"},
    { class:"fas fa-laptop", name:"laptop"},
    { class:"fas fa-rss", name:"rss"},
    { class:"fas fa-map-marker", name:"maplocation"},
    { class:"fas fa-poll", name:"pollstatistics"},
    { class:"fas fa-paper-plane", name:"sendplane"},
    { class:"far fa-paper-plane", name:"sendplane"},
    { class:"fas fa-quote-left", name:"openquote"},
    { class:"fas fa-quote-right", name:"closequote"},
    { class:"fas fa-share", name:"share"},
    { class:"fas fa-share-alt", name:"share"},
    { class:"fas fa-thumbs-up", name:"thubmsuplike"},
    { class:"far fa-thumbs-up", name:"thubmsuplike"},
    { class:"fas fa-thumbs-down", name:"thubmsdowndislike"},
    { class:"far fa-thumbs-down", name:"thubmsdowndislike"},
    { class:"fas fa-user", name:"user"},
    { class:"far fa-user", name:"user"},
    { class:"fas fa-user-circle", name:"usercircle"},
    { class:"far fa-user-circle", name:"usercircle"},
    { class:"fas fa-user-plus", name:"adduser"},
    { class:"fas fa-users", name:"users"},
    { class:"fas fa-video", name:"users"},
    { class:"fas fa-circle", name:"circle"},
    { class:"fas fa-braille", name:"braille"},
    { class:"fas fa-ellipsis-v", name:"morevertical"},
    { class:"fas fa-ellipsis-h", name:"morehorizontal"},
    { class:"fas fa-cog", name:"setting"},
    { class:"fas fa-cogs", name:"settings"},
    { class:"fas fa-tasks", name:"tasks"},
    { class:"fas fa-arrow-up", name:"arrowup"},
    { class:"fas fa-arrow-down", name:"arrowdown"},
    { class:"fas fa-arrow-left", name:"arrowleft"},
    { class:"fas fa-arrow-right", name:"arrowright"},
    { class:"fas fa-dollar-sign", name:"dollar"},
    { class:"fas fa-info", name:"information"},
    { class:"fas fa-credit-card", name:"creditcardpay"},

 

]

function Icons() {
    const [iconName, seticonName] = useState('');
    return (
        <section>
        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#simpleButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Button</div></a>
               <a href="#raisedButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Raised Button</div></a>
               <a href="#circularButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Circular Button</div></a>
               <a href="#fullWidthButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Full Width Button</div></a>
               <a href="#rippleButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Ripple Effect Button</div></a>
               <a href="#hoverUpButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hover Up Button</div></a>
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="text-big text-lighter text-indigo">
                 Icons
             </div>
             <div className="header-3">
               Cool Buttons Makes Your Website<br /> Reactive.
             </div>

             <div className="section hr">
    
             </div>
            </div>

<div className='container'>
<div> 
<input class="input full-width borderless light padding" placeholder="icon name...?" onChange={(e)=>seticonName(e.target.value)} />
</div>
 <div>
     <div className="row">
         {
             icons.filter(filterIcon=>{
             if(iconName === ''){
                 return filterIcon;
             }else if(
              filterIcon.class.toLowerCase().trim().includes(iconName.toLowerCase().trim())||
              filterIcon.name.toLowerCase().trim().includes(iconName.toLowerCase().trim())
             ){
                 return filterIcon;
             }else{
                 
             }
             }).map(icon=>(
        <div className="col sm-6 md-3 lg-3 padding">
             <div className="hover-shadow">
                 <div className="padding icon size-2">
                 <i class={icon.class}></i>
                 </div>
                 <div className="f2 padding icon-class padding-top-30 monospace">{`<i class="${icon.class}"></i>`}</div>
             </div>
         </div>
               
             ))
         }
 
     </div>
 </div>
</div> 
<Footer />
</div>

</div>
        </section>
    );
}

export default Icons;
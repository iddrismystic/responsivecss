import React from 'react';
import Footer from '../components/Footer';

function Colors() {
    const color = [
        {
        colorobject : `
    <div className="blue padding text-white">
        <div className="text-larger">Blue Background</div>
           <div>
              This background color of thist div is blue, with a text color of white
           </div>
    </div>
            `,
        name:"blue",
        header:"Blue Background",
        classes: "blue padding text-white"

        },
        {
        colorobject : `
    <div className="pink padding text-black">
        <div className="text-larger">pink Background</div>
           <div>
              This background color of thist div is pink, with a text color of black
           </div>
    </div>
            `,
        name:"pink",
        header:"Pink Background",
        classes: "pink padding text-black"

        },
    ]
    const hover = [
        {
        hoverobject : `
    <div className="blue hover-indigo padding text-white">
        <div className="text-larger">Hover to change Background</div>
           <div>
           <div>
           Hover on this element to change the background color of the element.
       </div>
           </div>
    </div>
            `,
        header:"Change to indigo",
        classes: "blue hover-indigo padding text-white"

        },
 
    ]

    let textcolor = `
    <div>
    <div class="card padding white">
    <div class="text-blue text-larger">Blue</div>
      <div class="text-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
    <div class="card padding white section">
    <div class="text-indigo text-larger">Indigo</div>
      <div class="text-indigo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
    <div class="card padding white">
    <div class="text-green text-larger">Green</div>
      <div class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
  
  </div>
    `

    const hovertextcolor = `
    <div>
  <div class="card padding white">
  <div class="text-blue text-larger hover-text-green">Hover To Change Color to green</div>
    <div class="text-blue hover-text-green">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
  <div class="card padding white section">
  <div class="text-indigo text-larger hover-text-purple">hover ot chnage color to purple</div>
    <div class="text-indigo hover-text-purple">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
</div>
    `

    return (
        <section className="padding-bottom-20">
              <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#background" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Background Color</div></a>
               <a href="#backgroundHover" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hoverable Background</div></a>
               <a href="#textColor" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Text Color</div></a>
               <a href="#hoverText" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hoverable Text</div></a>
  
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="text-bigger text-lighter text-indigo">
                 Colors
             </div>
             <div className="header-2">
                Good colors makes a greate<br /> impression.
             </div>

             <div className="section hr"></div>
            </div>
          
            <div className="container" id="introduction">
                <div className="sub-topic">Getting started with colors</div>
                <div className="note">
                Fun css colors can be use to change the background of your text, the color of your text and hover color effects. <br />
                You can use any of the colors below in building your website.
                </div>
                <div className="note">
         <span class="badge red color-bage"> red </span>
         <span class="badge blue color-bage"> blue </span>
         <span class="badge green color-bage"> green </span>
         <span class="badge pink color-bage"> pink </span>
         <span class="badge yellow color-bage"> yellow </span>
         <span class="badge black color-bage text-white"> black </span>
         <span class="badge brown color-bage"> brown </span>
         <span class="badge indigo color-bage"> indigo </span>
         <span class="badge purple color-bage"> purple </span>
         <span class="badge deep-purple color-bage"> deep-purple </span>
         <span class="badge sand color-bage"> sand </span>
         <span class="badge light color-bage"> light </span>
         <span class="badge light-blue color-bage"> light-blue </span>
         <span class="badge cyan color-bage"> cyan </span>
         <span class="badge light-green color-bage"> light-green </span>
         <span class="badge orange color-bage"> orange </span> 
         <span class="badge teal color-bage"> teal </span> 
         <span class="badge khaki color-bage"> khaki </span> 
                </div>
            </div>

            <div className="container padding-top-20" id="background">
                <div className="header-3 text-indigo">Background Color</div>
                <div className="note">
                You can use any of the color listed above to change the background color of your element by just
                writing the value of the color as a class.
                </div>
                <div class="code">
             <xmp>
 {
   `
<div class="indigo card padding text-white section">
   <div class="text-big">Indigo</div>
    <div>
     My background color is indigo <br />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
</div>
<div class="purple card padding text-white section">
   <div class="text-big">Purple</div>
    <div>
     My background color is purple <br />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
</div>
   `
 }
             </xmp>
               </div>
               <div className="preview">
    <div class="indigo card padding text-white section">
      <div class="text-big">Indigo</div>
      <div>
        My background color is indigo <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
    <div class="purple card padding text-white section">
      <div class="text-big">Purple</div>
      <div>
        My background color is purple <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
               </div>
            </div>
            
            <div className="container padding-top-20" id="backgroundHover">
                <div className="header-3 text-indigo">Background Hover Color</div>
                <div className="note">
                The
                <span className="badge">hover-value</span>
                is use to change the background color of an element when you hover on it. The value can be any of our framework colors listed above
                You can use any of the color listed above to change the background color of your element when you hover on the element.
                writing the value of the color as a class.
                </div>
                <div class="code">
             <xmp>
{`
<div class="indigo card hover-deep-purple padding text-white section">
  <div class="text-x-large">Indigo To Deep-Purple</div>
   <div>
     Hover to chnage my background to deep-purple<br />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
   </div>
</div>
<div class="purple card padding hover-indigo text-white section">
  <div class="text-x-large">Purple - Indigo</div>
   <div>
    Hover to change my background to indigo<br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
   </div>
</div>
`}
             </xmp>
               </div>
               <div className="preview">
  <div class="indigo card hover-deep-purple padding text-white section">
      <div class="text-x-large">Indigo To Deep-Purple</div>
      <div>
        Hover to chnage my background to deep-purple<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
    <div class="purple card padding hover-indigo text-white section">
      <div class="text-x-large">Purple - Indigo</div>
      <div>
       Hover to change my background to indigo<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
               </div>
            </div>

            <div className="container padding-top-20" id="textColor">
                <div className="header-3 text-indigo">Text Color</div>
                <div className="note">
                The
                <span className="badge">text-value</span>
                is use to change the text color of an html element, the value is any of our css framework colors you wish to use for your text color.
                </div>
                <div class="code">
             <xmp>
{textcolor}
             </xmp>
               </div>
               <div className="preview">
<div>
  <div class="card padding">
  <div class="text-blue text-larger">Blue</div>
    <div class="text-blue">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
  <div class="card padding section">
  <div class="text-indigo text-larger">Indigo</div>
    <div class="text-indigo">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
  <div class="card padding">
  <div class="text-green text-larger">Green</div>
    <div class="text-green">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>

</div>

               </div>
            </div>
            <div className="container padding-top-20" id="hoverText">
                <div className="header-3 text-indigo">Hover Text Color</div>
                <div className="note">
                The
                <span className="badge">hover-text-value</span>
                 class is use to change the text color of an html element when you hover on the element, the value is any of our css framework colors you wish to use for your hover effect.
                </div>
                <div class="code">
             <xmp>
{hovertextcolor}
             </xmp>
               </div>
               <div className="preview">
<div>
  <div class="card padding white">
  <div class="text-blue text-larger hover-text-green">Hover To Change Color to green</div>
    <div class="text-blue hover-text-green">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
  <div class="card padding white section">
  <div class="text-indigo text-larger hover-text-purple">hover ot chnage color to purple</div>
    <div class="text-indigo hover-text-purple">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
</div>

               </div>
            </div>


<div class="container">
    <div class="note">
        <div class="note-title">Note</div>
        <div>
            Choosing greate color will make your website nice and uniform, you should try to choose atleast 2 colors 
            for your primary colors, primary colors are colors you often use much when designing a website
        </div>
    </div>
</div>

<Footer />
                </div>


                </div>
            
        </section>
    );
}

export default Colors;
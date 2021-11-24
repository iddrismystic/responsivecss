import React from 'react';
import Logo from './Logo';
import {useState} from "react"
import { useHistory } from 'react-router-dom';
function Sidebar() {
    const redirect = useHistory()
   let links = [
    {
        text:"Home",
        path:""
    } ,
        {
            text:"Getting Started",
            path:"gettingstarted"
        } ,
        {
            text:"Colors",
            path:"colors"
        } ,
        {
            text:"Typography",
            path:"typography"
        } ,
        {
            text:"Helpers",
            path:"helpers"
        },
        {
            text:"Icons",
            path:"icons"
        } ,
        {
            text:"Container",
            path:"container"
        } ,
        {
            text:"Grid",
            path:"Grid"
        } ,
        {
            text:"Buttons",
            path:"buttons"
        } ,
        {
            text:"Card",
            path:"card"
        },
        {
            text:"Slide Panel",
            path:"slidepanel"
        } ,
        {
            text:"Inputs",
            path:"inputs"
        } ,
        {
            text:"Table",
            path:"table"
        } ,
        {
            text:"List",
            path:"list"
        } ,
        {
            text:"Modal",
            path:"modal"
        } ,
        {
            text:"Dropdown",
            path:"dropdown"
        },
        {
            text:"Navigation bar",
            path:"navigationbar"
        },
        {
            text:"Slider",
            path:"slider"
        },
        {
            text:"About",
            path:"about"
        } 
    ]

    //handlesidebar
    const [width, setwidth] = useState("fit-content");
    const [display, setdisplay] = useState('block');
    const Handlesidebar = ()=>{
     if(width === "fit-content"){
         setwidth("0px")
         setdisplay('none')

    }else{
         setwidth("fit-content")
         setdisplay('block')
    }
    }
    const [search, setsearch] = useState('');
    return (
        <div className="text-small">

              <div className="open-sidebar">
            <span class="material-icons icon size-2 pointer" onClick={Handlesidebar} >
               menu
            </span>
              </div>
              <div className="SideBar" style={{width : `${width}`, display:`${display}`}}>
                  <div className="padding">
                          <center>
                          <Logo />
                          </center>
                  </div>

                  <div className="hr margin-top-10"></div>

                  <div>
                      <input className="input search width-100-p padding-top-10 padding-bottom-10 text-center" onChange={(e)=>setsearch(e.target.value)} placeholder="Search..." />
                  </div>
                  
                  <div className="section">

                      {
                         links.filter(text=>{
                         if(search === ''){
                             return links;
                         }else if (
                         text.text.toLowerCase().trim().includes(search.toLowerCase().trim())
                         ){
                             return links
                         }
                         }).map(link=>(
                        <div className="padding-top-10">
                            <div className="padding button text-lighter sidebar-link" onClick={()=>redirect.push(`/${link.path}`)}>
                            {link.text}
                            <span class="sidebar-icon ">
                            <i class="fas fas fa-angle-double-right text-indigo"></i>
                            </span>
 
                            </div>

                        </div>
                          ))
                      }
               
                  </div>
              </div>
        </div>
    );
}

export default Sidebar;
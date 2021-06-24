import '../css/Landing.css'
import React from 'react'

function Landing({setValue}) {
        const hoverEffect1= ()=>{
            setValue(1)
        }
        const hoverEffect2= ()=>{
            setValue(0)
        }
    return (
        <div>
            <div className="container">
               <div className="inner-container">
                <div className="nav-bar">
                        <div className="left-nav" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}>Home</div>
                        <div className="right-nav">
                            <div className="right-nav-comp" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}>Projects</div>
                            <div className="right-nav-comp" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}>About me</div>
                            <div className="right-nav-comp" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}>Skills</div>
                            <div className="right-nav-comp" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}>Contact</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-details">
                            <div className="name"><h5>Milan Thapa</h5></div>
                            <div className="info-in"><h1>WEB DEVELOPER</h1></div>
                            <div className="more-info"><h1>WEB DESIGNER</h1></div>
                            <div className="gmail" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}><div className="gmail-blur"></div><div  className="gmail-wrap"></div></div>
                            <a href="https://twitter.com/MilanTh88477097"><div className="facebook" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}><div className="facebook-blur"></div><div className="facebook-wrap"></div></div></a>
                            <a href="https://www.instagram.com/mlnthapa/"><div className="insta" onMouseEnter={hoverEffect1} onMouseLeave={hoverEffect2}><div className="insta-blur"></div><div className="insta-wrap"></div></div></a>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Landing

import React,{useRef} from 'react';
import '../css/Aboutme.css';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

function Aboutme() {
    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:0.8
    });

    const fadeIn=(element)=>{
        gsap.to(element,2,{
            opacity:1,
            ease:'power4.out',
            scale:1
        })
    }

    const fadeOut=(element)=>{
        gsap.to(element,2,{
            opacity:0,
            ease:'power4.out',
            scale:0.5
        })
    }

    intersection && intersection.intersectionRatio < 0.8 ? fadeOut(".fadeIn2")
    :fadeIn(".fadeIn2")
    

    return (
        <>
        <div ref={sectionRef} id="container4" className="container4">
            <div className="topSec">
                    <div className="about-me-heading">
                        <h5>About me</h5>
                        <div className="underline-aboutme"></div>
                    </div>
                </div>
            <div className="bottomSec">
                <div className="details-part">
                    <div className="image-div fadeIn2"></div>
                    <div className="my-details fadeIn2">
                        <div style={{display:'flex',}}><p>Hi! I'm </p><p style={{color:'#b40d1a',marginLeft:`${4}px`,fontWeight:600}}>Milan Thapa</p></div>
                        <p>I'm a computer science engineer who is passionate about </p>
                        <p>designing, photography and photo editting.</p>
                        <p>Being a beginner at web designing and developing I'm just trying to</p>
                        <p>survive with noob experience and pro confidence.</p>
                    </div>
                </div>   
            </div>
        </div>
          
        </>
    )
}

export default Aboutme

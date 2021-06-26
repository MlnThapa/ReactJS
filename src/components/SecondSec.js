import React,{useRef} from 'react'
import '../css/SecondSec.css'
import { useIntersection } from 'react-use';
import gsap from 'gsap';

function SecondSec() {
    const sectionRef3 = useRef(null);

    const intersection = useIntersection(sectionRef3,{
        root:null,
        rootMargin:'0px',
        threshold:0.5
    });

    const fadeIn=(element)=>{
        gsap.to(element,1.3,{
            opacity:1,
            ease:'power4.out',
            scale:1
        })
    }

    const fadeOut=(element)=>{
        gsap.to(element,1.3,{
            opacity:0,
            ease:'power4.out',
            scale:0.5
        })
    }

    intersection && intersection.intersectionRatio < 0.5 ? fadeOut(".fadeIn3")
    :fadeIn(".fadeIn3")
    return (
        <div>
           <div ref={sectionRef3} className="container2">
               <div className="proj-heading">
                   <div className="heading-div">
                       <h5 className="fadeIn3">My projects</h5>
                       <div className="underline-project fadeIn3"></div> 
                   </div>
               </div>
               <div className="projects-part fadeIn3">
                   <div className="proj-div">
                        <div className="left-proj">
                            <div className="nep-proj1"></div>
                            <div className="nep-proj2"></div>
                            <div className="nep-proj3"></div>
                            <div className="food-proj"></div>
                        </div>
                        <div className="right-proj">
                            <div className="more-proj">
                                <a href="https://www.youtube.com/watch?v=rdi7G1hY4-w&ab_channel=SandaruSathsara">
                                <div><p>View more of my works</p></div>
                                <div className="arrow-div"></div>
                                </a>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default SecondSec

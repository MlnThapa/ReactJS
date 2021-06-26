import React,{useRef} from 'react';
import '../css/Skills.css';
import gsap from 'gsap';
import {useIntersection} from 'react-use';

function Skills() {
    const sectionRef2 = useRef(null);

    const intersection = useIntersection(sectionRef2,{
        root:null,
        rootMargin:'0px',
        threshold:0.8
    });

    const fadeIn=(element)=>{
        gsap.to(element,1.5,{
            opacity:1,
            ease:'power4.out',
            scale:1,
        })
    }

    const fadeOut=(element)=>{
        gsap.to(element,1.5,{
            opacity:0,
            ease:'power4.out',
            scale:0.5,
        })
    }

    intersection && intersection.intersectionRatio < 0.8 ? fadeOut(".fadeIn")
    :fadeIn(".fadeIn")
    
    return (
        <div>
            <div ref={sectionRef2} id="container3" className="container3">
               <div className="heading-box">
                   <div className="heading">
                        <h5>SKILLS</h5>
                        <div className="underline"></div>
                   </div>
               </div>
                <div className="skill-list-container">
                    <div className="skills-list fadeIn">
                        <div><p>ReactJs</p></div>
                        <div><p>NodeJs</p></div>
                        <div><p>MongoDB</p></div>
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div><p>Photoshop</p></div>
                        <div><p>Javascript</p></div>
                        <div><p>SCSS</p></div>
                        <div><p>AdobeXd</p></div>
                        <div><p>Python</p></div>
                        <div><p>TypeScript</p></div>
                        <div><p>Photography</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

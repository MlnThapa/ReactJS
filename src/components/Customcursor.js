import React,{useState,useEffect} from 'react'
import '../css/CustomCursor.css'

function Customcursor({value}) {
    let cursor = document.getElementsByClassName('cursor');
    const [mousePosition,setMousePosition]=useState({
        x:400,
        y:400
    })
    const onMouseMove= event=>{
        const {pageX:x,pageY:y} = event;
        setMousePosition({x,y})
    }
    let mystyle;
    if(value===0){
        mystyle = {
        left:`${mousePosition.x}px`,
        top:`${mousePosition.y}px`,
        height:`${15}px`,
        width:`${15}px`,
        background:'#b40d1a',
        borderRadius:'100%',
        }
    }else{
        mystyle = {
            left:`${mousePosition.x}px`,
            top:`${mousePosition.y}px`,
            height:`${25}px`,
            width:`${25}px`,
            background:'none',
            border:'1px solid #b40d1a',
            borderRadius:'100%',
    }
}
    useEffect(()=>{
        document.addEventListener('mousemove',onMouseMove);
        return()=>{
            document.removeEventListener('mousemove',onMouseMove)
        }
    },[])
    return (
        <>
         <div className="cursor" style={mystyle}></div>   
        </>
    )
}

export default Customcursor

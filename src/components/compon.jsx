import React from "react";
import { useEffect, useState } from "react"

export function Component () {

        // const [dark, setDark] = useState(false);
        // const HandleCLick = () => {
        //     setDark(true);
        //    return (
        //     <>
            
        //     <button className= "handleButton" onClick = {HandleCLick}></button>
        //     </>
        //    )
        //      const [dark,setDark] = useState(false)
        // const add = () => setDark( prev => prev += true )
        // console.log(add);
    
    
        // ${dark === true ? 'dark' : "" }

    return (
        <div className= "divPadre">
            <h1 className="title">TITULO</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem ratione possimus in pariatur, magnam, ullam quae praesentium corrupti quasi ipsum veniam saepe accusantium temporibus! Rerum exercitationem ad accusantium optio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate magni expedita vel pariatur nihil vitae sed distinctio porro officiis harum consequuntur, illum, dolor perspiciatis alias recusandae obcaecati quaerat laborum.</p>
            <button className="btn" >Dark</button>
            
        </div>
    )

}
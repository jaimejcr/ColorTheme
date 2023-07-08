
import { Button } from "./button"
import { changeColor } from "./button";
import React, { useState } from 'react';

export function Component () {

    const [color, setColor] = useState('light');

    return (
        <div id="myDiv" className= {`divPadre ${color}`}>
            <h1 className="title">TITULO</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem ratione possimus in pariatur, magnam, ullam quae praesentium corrupti quasi ipsum veniam saepe accusantium temporibus! Rerum exercitationem ad accusantium optio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate magni expedita vel pariatur nihil vitae sed distinctio porro officiis harum consequuntur, illum, dolor perspiciatis alias recusandae obcaecati quaerat laborum.</p>
             
            <Button setColor={setColor} color={color}/>
            
        </div>
    )

}

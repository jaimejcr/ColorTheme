import React, { useState, useEffect } from 'react';


export function Button ({  setColor, color }) {

  
    

    const changeColor = () => {
      setColor(color === 'light' ? 'dark' : 'light');
    };

    
    return (
      <div>
        <button  onClick={changeColor}>Cambiar Color</button>
        
      </div>
     );
  

}






















// import React, { useState, useEffect } from 'react';

// export function Button() {
//   const ColorChanger = () => {
//     const [color, setColor] = useState('red');

//     const changeColor = () => {
//       setColor(color === 'red' ? 'blue' : 'red');
//     };

//     useEffect(() => {
//       // Actualizar el color del fondo del <div> cada vez que 'color' cambie
//       const myDiv = document.getElementById('myDiv');
//       myDiv.style.backgroundColor = color;
//     }, [color]);

//     return (
//       <div>
//         <button onClick={changeColor}>Cambiar Color</button>
//         <div id="myDiv" style={{ width: '200px', height: '200px' }}></div>
//       </div>
//     );
//   };

//   return <ColorChanger />;
// }




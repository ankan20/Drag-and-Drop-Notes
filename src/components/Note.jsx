import React, { forwardRef } from 'react'

const Note = forwardRef(({text="",initialPos,...props},ref) => {
  return (
    <div 
    
    ref={ref}
    style={{
        position:'absolute',
        top:`${initialPos?.y}px`,
        left:`${initialPos?.x}px`,
        border:"1px solid black",
        userSelect:'none',
        padding:"10px",
        width:"200px",
        cursor:"move",
        backgroundColor:"lightyellow",
        boxShadow:"8px 8px 20px ",
        borderRadius:"10px",
        
    }
    }
    {...props}
    >
      <p>📌 {text}</p>
    </div>
  )
})

export default Note

import React, { useState } from 'react'
import Notes from './components/Notes';

const App = () => {

  const [notes,setNotes] = useState([
    {
      id:1,
      text:"This is small react project."
    },
    {
      id:2,
      text:"You can drag and drop notes here."
    },
    {
      id:3,
      text:"You can also new note here."
    },

  ]
);




  return (
    <div 

      style={{
        backgroundColor:"gray",
        minHeight:"100vh",
        minWidth:"100vw",
        
      }}
    
    >
      <input type="text" />
      <Notes notes={notes}  setNotes={setNotes}/>
    </div>
  )
}

export default App

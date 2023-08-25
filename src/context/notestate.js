import NoteContext from "./notecontext";
import { useState } from "react";
const NoteState = (props) =>
{
  const host = "http://localhost:3000"
  const [notes, setNotes] = useState()
  // Get all Notes

    return (
    <NoteContext.Provider value={{  }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;
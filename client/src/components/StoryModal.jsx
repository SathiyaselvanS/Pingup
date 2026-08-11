import React from 'react'

const StoryModal = () => {
    const bgcolors=["#4f46e5","#7c3aed","#db2777","#e11d48","#ca8a04","#0d9488"]
    const [mode,setMode] = setState("text")
    const [background, setBackground]=useState(bgcolors[0])
    const [text,setText] = setState("")
  return (
    <div>StoryModal</div>
  )
}

export default StoryModal
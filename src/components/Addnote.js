import React from 'react'
export default function Addnote ({handleaddnote}) {
    const [notetext,setnotetext] = React.useState('');
    const characterlimit =200;
    const handlechange = (event) =>{
      if(characterlimit -event.target.value.length >= 0 )
      {setnotetext(event.target.value)}
    }
    const handlesaveclick = () => {
      if(notetext.trim().length> 0){
       handleaddnote(notetext)
       setnotetext('')
      } 
    }
    return (
        <div className="note new">
        <textarea row='8' cols='10' placeholder="type new note" value={notetext} onChange={handlechange}></textarea>
        <div className="note-footer">
        <small>{characterlimit-notetext.length} remaining</small>
        <button className="save" onClick={handlesaveclick}>Save</button>
        </div>
        </div>

    )
}

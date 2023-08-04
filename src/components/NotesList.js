import Note from './Note'
import Addnote from './Addnote'
export default function NotesList  ({notes,handleaddnote,handledeletenote} ) {
 console.log(notes);
   
    return (
     <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} handledeletenote={handledeletenote} /> )
            )}
            
         <Addnote handleaddnote={handleaddnote}/>
        </div>
    )
}

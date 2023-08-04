import NotesList from './components/NotesList'
import {useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'

export default function App  ()  {
  const [notes,setnotes] = useState([{
    id:nanoid(),
    text:"learn react",
    date:"18/12/2022"
  
  },
  {
    id:nanoid(),
    text:"learn english",
    date:"19/12/2022"
  
  },
  {
    id:nanoid(),
  
    text:"learn ccna",
    date:"20/12/2022"
  
  }]);
  const [searchtext,setsearchtext]=useState('');
  const [darkmode ,setdarkmode]=useState(false);

  useEffect(()=>{
   const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
   if(savedNotes){
    setnotes(savedNotes)
   }
      },[])
  useEffect(()=>{
localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])



 function addnote(text){
    const date = new Date ()
    const newnote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newnotes = [...notes,newnote]
    setnotes(newnotes)
 }
 function deletenote (id){
  const newsnotes = notes.filter((note)=> note.id !== id);
  setnotes(newsnotes)

 }
  
  return (
    <div className={`${darkmode && 'dark-mode'}`}>
    <div className='container'>
      <Header handletoggledarkmode={setdarkmode}/>
      <Search handlesearchnote={setsearchtext}/>
<NotesList 
notes={notes.filter((note)=>note.text.toLowerCase().includes(searchtext))} 
handleaddnote={addnote} 
handledeletenote={deletenote}
/> 
</div>
</div>
  )
}

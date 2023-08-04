import react from 'react'
export default function Header({handletoggledarkmode}){
    return (
        <div className='header'>
         <h1>Notes</h1>
         <button onClick={()=>handletoggledarkmode((previousdarkmode)=> !previousdarkmode)}className='save'>toggle mode</button>
        </div>
    )
}
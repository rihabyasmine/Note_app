import React from 'react'
import{MdSearch} from 'react-icons/md'
export default function Search ({handlesearchnote}){
return (
    <div className='search'> 
    <MdSearch className='search-icon' size='1.3em'/>
    <input onChange={(event)=>handlesearchnote(event.target.value)}type='text' placeholder="type to search ..."/>

    </div>
)
}
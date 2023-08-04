import {MdDelete} from 'react-icons/md'
export default function Note (props)  {
    return (
   <div className="note">
    <span>{props.text} </span>
    <div className="note-footer">
        <small>{props.date}</small>
        <MdDelete onClick={() => props.handledeletenote(props.id)}   className="delete-icons" size='1.3em' />
    </div>

   </div>
    )
}



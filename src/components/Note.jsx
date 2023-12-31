import React from "react";


function Note(props){

    function deleteItem(){
        props.onDelete(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}
export default Note;
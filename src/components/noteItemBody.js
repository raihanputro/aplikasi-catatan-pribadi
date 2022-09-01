import React from "react";
import { showFormatedDate } from "../utils/noteData"


function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item__body">
            <h1 className="note-item__title">{title}</h1>
            <h4 className="note-item__date">{showFormatedDate(createdAt)}</h4>
            <p className="note-item__body">{body}</p>
        </div>
    )
}


export default NoteItemBody;
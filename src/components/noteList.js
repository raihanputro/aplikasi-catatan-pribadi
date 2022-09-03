import React from "react";
import NoteItem from "./noteItem";

function NoteList({notes, onDelete, onArchive}) {
    if(notes.length === 0) {
        return (
            <div className="notes-list">
                <p className="notes-list__empty-message">tidak ada catatan</p>
            </div>
        )
    }

    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
                ))
            }
        </div>
        
    )
}

export default NoteList;


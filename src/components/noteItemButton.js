import React from "react";

function NoteItemButton({id, onDelete, onArchive}) {
    return (
        <div className="note-item__button">
            <button className="note-item__delete" onClick={ () => onDelete(id) }>Hapus</button>
            <button className="note-item__archive" onClick={ () => onArchive(id) }>Arsip</button>
        </div>
    )
}

export default NoteItemButton;
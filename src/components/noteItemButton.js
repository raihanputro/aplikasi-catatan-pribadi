import React from "react";

function NoteItemButton({id, onDelete, onArchive}) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={ () => onDelete(id) }>Hapus</button>
            <button className="note-item__archive-button" onClick={ () => onArchive(id) }>Arsip</button>
        </div>
    )
}

export default NoteItemButton;
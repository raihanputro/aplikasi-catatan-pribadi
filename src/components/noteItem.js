import React from "react";
import NoteItemBody from "./noteItemBody";
import NoteItemButton from "./noteItemButton";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody className="" title={title} body={body} createdAt={createdAt} />
            <NoteItemButton id={id} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NoteItem;



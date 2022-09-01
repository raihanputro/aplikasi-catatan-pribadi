import React from "react";
import NoteItemBody from "./noteItemBody";
import NoteItemButton from "./noteItemButton";
import {showFormatedDate} from "../utils/noteData";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
            <NoteItemButton id={id} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NoteItem;



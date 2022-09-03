import React from "react";
import NoteList from "./noteList";
import InputNote from "./noteInput";
import { getNote, showFormatedDate } from "../utils/noteData";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getNote()
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchiveNoteHandler(id) {
        const notes = this.state.notes.map((note) => {
            if(note.id === id) {
                return {...note, archived: !note.archived}
            }
            return note;
        })
        this.setState({notes});
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: showFormatedDate(+new Date())
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="note-app">
                <InputNote addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />
                <h2>Arsip</h2>
            </div>
        )
    }
}

export default NoteApp;
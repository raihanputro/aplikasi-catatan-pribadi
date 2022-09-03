import React from "react";

class InputNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        }) 
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        const Message = 'Catatan berhasil ditambahkan';
        alert(Message);
    }


    render() {
        return (
            <div className="note-input">
                <h1>Buat Catatan</h1>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input id="title" className="note-input__title" value={this.state.title} onChange={this.onTitleChangeEventHandler} type="text" placeholder="Tulis judul"></input><br />
                    <input id="body" className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler} type="text" placeholder="Tuliskan catatan mu disini..."></input><br />
                    <button type="submit">buat</button>
                </form>
            </div>
        )
    }
}

export default InputNote;
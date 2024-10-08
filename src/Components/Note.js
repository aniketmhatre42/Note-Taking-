import React from 'react';

const Note = ({ note, deleteNote, editNote }) => {
  return (
    <div className="note">
      <div>
        <strong>{note.text}</strong>
        <br />
        <small>{note.timestamp}</small> {/* Display the timestamp */}
      </div>
      <div>
        <button className="edit-btn" onClick={editNote}>
          <i className="fa fa-pencil"></i>
        </button>
        <button className="delete-btn" onClick={deleteNote}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Note;

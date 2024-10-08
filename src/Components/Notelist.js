import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note 
          key={index} 
          note={note} 
          deleteNote={() => deleteNote(index)} 
          editNote={() => editNote(index)} // Pass editNote function here
        />
      ))}
    </div>
  );
};

export default NoteList;

// Components/NoteForm.js
import React, { useState, useEffect } from 'react';

const NoteForm = ({ addNote, editNoteText }) => {
  const [noteText, setNoteText] = useState('');

  // Update note text when edit mode is triggered
  useEffect(() => {
    setNoteText(editNoteText);
  }, [editNoteText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText(''); // Clear input field after adding or editing a note
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="note-input"
      />
      <button type="submit" className="add-note-btn">
        {editNoteText ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;

import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import NoteForm from './Components/NoteForm';
import NoteList from './Components/Notelist';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [editNoteIndex, setEditNoteIndex] = useState(null);
  const [editNoteText, setEditNoteText] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const timestamp = new Date().toLocaleString(); // Get the current timestamp
    if (editNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editNoteIndex] = { text, timestamp }; // Update the note with timestamp
      setNotes(updatedNotes);
      setEditNoteIndex(null);
      setEditNoteText('');
    } else {
      setNotes([{ text, timestamp }, ...notes]); // Add new note with timestamp
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const editNote = (index) => {
    setEditNoteIndex(index);
    setEditNoteText(notes[index].text); // Get the text of the note being edited
  };

  return (
    <div className="app">
      <h1>Note-Taking App</h1>
      <NoteForm 
        addNote={addNote} 
        editNoteText={editNoteText} 
      />
      <NoteList 
        notes={notes} 
        deleteNote={deleteNote} 
        editNote={editNote} 
      />
    </div>
  );
}

export default App;

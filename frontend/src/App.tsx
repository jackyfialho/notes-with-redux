import React from 'react';
import { NewNoteInput } from './components/NewNoteInput';
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './notesReducer';
import { addNote } from './actions';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote} />

      <hr />
      
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

import React, { ChangeEvent, useState } from 'react';

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  }

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  }

  return (
      <>
          <div>
              <input onChange={updateNote} value={note} type="text" name="note" placeholder="Anotação" />
              <button onClick={onAddNoteClick}>Criar anotação</button>
          </div>
      </>
  )
}
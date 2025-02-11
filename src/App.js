import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState(""); // Ekta note input box er jonno
  const [notes, setNotes] = useState([]); // Multiple notes store korar jonno

  const handleSave = () => {
    if (notes.length < 5) {
      setNotes([...notes, note]); // Notun note add korbe
      setNote(""); // Input ta clear hobe
    } else {
      alert("You can only save up to 5 notes!");
    }
  };

  const handleDelete = () => {
    if (notes.length > 0) {
      setNotes(notes.slice(1)); // First note delete hobe
    }
  };
  // Retrieve notes from localStorage when the app loads
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) setNotes(storedNotes);
  }, []); // ✅ Removed the extra closing brace

  // Save notes to localStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "solid black",
      }}
    >
      <h1>MyNote</h1>
      <textarea
        rows="10"
        cols="100"
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSave} style={{ marginTop: "10px" }}>
        Add Note
      </button>
      <button
        onClick={handleDelete}
        style={{ marginLeft: "10px", color: "white" }}
      >
        Delete Note
      </button>

      <h3>Your Saved Notes</h3>
      <hr />
      {notes.map((n, index) => (
        <p key={index}>{n}</p> // Sob saved notes show hobe
      ))}
    </div>
  );
}

export default App;

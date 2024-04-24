import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitials = [
    {
      _id: "66269ad6cc0d4ccbd3cf7afa",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:58.740Z",
      __v: 0,
    },
    {
      _id: "66269ad6cc0d4ccbd3cf7afc",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:58.872Z",
      __v: 0,
    },
    {
      _id: "66269ad6cc0d4ccbd3cf7afe",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:58.991Z",
      __v: 0,
    },
    {
      _id: "66269ad7cc0d4ccbd3cf7b00",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:59.225Z",
      __v: 0,
    },
    {
      _id: "66269ad6cc0d4ccbd3cf7afa",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:58.740Z",
      __v: 0,
    },
    {
      _id: "66269ad6cc0d4ccbd3cf7afc",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:58.872Z",
      __v: 0,
    },
    {
      _id: "66269ad6cc0d4ccbd3cf7afe",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:58.991Z",
      __v: 0,
    },
    {
      _id: "66269ad7cc0d4ccbd3cf7b00",
      user: "66264dd9ad61e7ae93f22f08",
      title: "my title",
      description: "please wake up early",
      tag: "personal",
      timestamp: "2024-04-22T17:13:59.225Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitials);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

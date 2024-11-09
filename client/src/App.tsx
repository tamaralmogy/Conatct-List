import React, { FC } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import { Contact } from "./types";

// import logo from "./logo.svg";
import "./App.css";

const App: FC = () => {
  const handleAddContact = (contact: Contact) => {
    console.log("New Contact Added:", contact);
  };

  return (
    <>
      <Header />
      <ContactForm onSubmit={handleAddContact} />
    </>
  );
};

export default App;

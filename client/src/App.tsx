import React, { FC, useState, useEffect } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Contact } from "./types";

// import logo from "./logo.svg";
import "./App.css";

const App: FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Fetch all contacts from the server
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/contacts");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  // Add a new contact to the server and update the local state
  const handleAddContact = async (contact: Omit<Contact, "id">) => {
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const newContact = await response.json();
        setContacts([...contacts, newContact]); // Update local state with new contact
      } else {
        console.error("Failed to add contact");
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <>
      <Header />
      <ContactForm onSubmit={handleAddContact} />
      <ContactList contacts={contacts} />
      {/* <p>{serverMessage}</p> */}
    </>
  );
};

export default App;

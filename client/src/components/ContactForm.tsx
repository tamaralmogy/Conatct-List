import React, { FC, ChangeEvent, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Contact } from "../types";

interface ContactFormProps {
  onSubmit: (contact: Contact) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const [contact, setContact] = useState<Omit<Contact, "id">>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), ...contact });
    setContact({ firstName: "", lastName: "", phone: "", email: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleOnSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Add New Contact
      </Typography>
      <TextField
        label="First Name"
        name="firstName"
        value={contact.firstName}
        onChange={handleOnChange}
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={contact.lastName}
        onChange={handleOnChange}
        required
      />
      <TextField
        label="Phone"
        name="phone"
        value={contact.phone}
        onChange={handleOnChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        value={contact.email}
        onChange={handleOnChange}
        required
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary" type="submit">
          Add Contact
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;

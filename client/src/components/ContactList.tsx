import React, { FC } from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Contact } from "../types";

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: FC<ContactListProps> = ({ contacts }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <React.Fragment key={contact.id}>
          <ListItem>
            <ListItemText
              primary={`${contact.firstName} ${contact.lastName}`}
              secondary={`${contact.phone} ${contact.email}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};
export default ContactList;

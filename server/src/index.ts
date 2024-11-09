import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const contacts: Contact[] = []; // In-memory to store contacts

// Get all contacts
app.get("/api/contacts", (req: Request, res: Response) => {
  res.json(contacts);
});

// Create a new contact
app.post("/api/contacts", (req: Request, res: Response) => {
  const newContact: Contact = { id: Date.now(), ...req.body };
  contacts.push(newContact);
  res.status(201).json(newContact);
  console.log(contacts);
});

// // Test route to check connectivity
// app.get("/api/test", (req: Request, res: Response) => {
//   res.json({ message: "Hello from the server!" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");

const app = express();
app.use(express.json()); 

const USERS_FILE = "users.json";


if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}


const readUsers = () => {
  const data = fs.readFileSync(USERS_FILE, "utf8");
  return JSON.parse(data);
};


const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};


app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  const users = readUsers();

 
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already exists." });
  }

  try {
   
    const hashedPassword = await bcrypt.hash(password, 10);

   
    users.push({ username, password: hashedPassword });
    saveUsers(users);

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error registering user." });
  }
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;


  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  const users = readUsers();


  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  try {
   
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      res.status(200).json({ message: "Login successful." });
    } else {
      res.status(401).json({ message: "Invalid username or password." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error logging in." });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

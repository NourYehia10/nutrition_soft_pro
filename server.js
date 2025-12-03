const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Message Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // For now just send a response
    res.json({ status: "success", message: "Your message has been received!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

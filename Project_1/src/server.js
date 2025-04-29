import express from "express";
import { console } from "inspector";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

//Get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url);
// get the directory name from the file path
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
// Serves the HTML file from the public folder
// Tells express to serve static files from the public folder as assests /
// file. Any requests for the css files will be resolved to the public folder
app.use(express.static(path.join(__dirname, "../public")));

// serving up the HTML file from the public folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Routes
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

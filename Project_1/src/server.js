import express from "express";
import { console } from "inspector";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = process.env.PORT || 5003;

//Get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url);
// get the directory name from the file path
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

// serving up the HTML file from the public folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Routes
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 8080;
const app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

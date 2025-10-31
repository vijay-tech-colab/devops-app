import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", todoRoutes);
app.get("/", (req, res) => res.send("Todo API Running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

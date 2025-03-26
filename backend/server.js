import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// for deployment making the configuration
import path from "path";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Use middleware to parse the request body
//Middleware is a function that just runs before you send a response back to the client.
app.use(express.json()); //It allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

// console.log(process.env.MONGO_URI);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server staterted at port ", PORT);
});

// Mongodb Passcode - hAfioTNDl9k0AUjf

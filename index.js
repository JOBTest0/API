import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import MemberRoutes from "./router/routerUser.js";
import bodyParser from "body-parser";
dotenv.config();
connectDB();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [

      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use("/api", MemberRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
  console.log(`http://localhost:${PORT}`);
});

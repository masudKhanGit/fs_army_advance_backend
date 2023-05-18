import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./globalRoutes.js";
import { middleware } from "./middleware.js";

const app = express();

app.use(middleware);

// global router
app.use("/api/v1", router);

export default app;

import express from "express";


// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export default app;

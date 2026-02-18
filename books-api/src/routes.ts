import { Router } from "express";
import bookController from "./books/controllers/book.controller";

const routes = Router();

routes.post("/books", bookController.create);

export { routes };

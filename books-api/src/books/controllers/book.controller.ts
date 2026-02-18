import { Request, Response } from "express";
import bookService from "../services/book.service";

class BookController {
  async create(req: Request, res: Response) {
    const createdBook = await bookService.create(req.body);
    res.status(201);
    return res.json(createdBook);
  }
}

export default new BookController();

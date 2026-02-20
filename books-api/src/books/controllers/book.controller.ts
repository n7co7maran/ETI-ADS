import { Request, Response } from "express";
import bookService from "../services/book.service";

class BookController {
  async create(req: Request, res: Response) {
    const createdBook = await bookService.create(req.body);
    res.status(201);
    return res.json(createdBook);
  }

  async findAll (req: Request, res: Response) {
    const books = await bookService.findAll();
    return res.json(books);
  }

  async findById (req: Request, res: Response) {
    const { id } = req.params;
    const book = await bookService.findById(id);
    return res.json(book);
  }

  async update (req: Request, res: Response) {
    const { id } = req.params;
    const uptadeBook = await bookService.update(id, req.body);
    res.status(200);
    return res.json(uptadeBook);
  }

  async delete (req: Request, res: Response) {
    const { id } = req.params;
    await bookService.delete(id);
    res.status(204);
    return res.status(204).send();
  }

}

export default new BookController();

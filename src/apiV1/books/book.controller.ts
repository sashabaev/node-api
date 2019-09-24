import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import config from '../../config/config';
import Book from './book.model';

export default class BookController {
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      console.log("Try get books");
      const books = await Book.find();
      console.log(books && books[0]);
      if (!books) {
        return res.status(404).send({
          success: false,
          message: 'books not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: books
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public add = async (req: Request, res: Response): Promise<any> => {
    try {      
      const { price, image, isbn, title,
        subtitle, author, published, publisher,
        pages, description, } = req.body;

      console.log(req.body)
      const book = new Book({ 
        price, image, isbn, title,
          subtitle, author, published, publisher,
          pages, description
      });

      const newBook = await book.save();
      //const book = await Book.create(req.body);
      if (!newBook) {
        return res.status(404).send({
          success: false,
          message: 'book not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: newBook
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public update = async (req: Request, res: Response): Promise<any> => {
    const { name, lastName, email, password } = req.body;
    try {
      const bookUpdated = await Book.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            name,
            lastName,
            email,
            password
          }
        },
        { new: true }
      );
      if (!bookUpdated) {
        return res.status(404).send({
          success: false,
          message: 'book not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: bookUpdated
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public remove = async (req: Request, res: Response): Promise<any> => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);

      if (!book) {
        return res.status(404).send({
          success: false,
          message: 'book not found',
          data: null
        });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}

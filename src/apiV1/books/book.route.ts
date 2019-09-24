import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './book.controller';

const book: Router = Router();
const controller = new Controller();

// Retrieve all Users
book.get('/', controller.findAll);

// Retrieve a Specific User
book.post('/add', controller.add);

// Update a User with Id
book.put('/:id', controller.update);

// Delete a User with Id
book.delete('/:id', controller.remove);

export default book;

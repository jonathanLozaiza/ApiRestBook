import {Request, Response} from "express"
import bookModel, {Book} from "../models/book"

class BooksController{

    public async index(req: Request, res: Response): Promise<void>{
        const books: Book[] = await bookModel.find(); 
        const newsBooksObject = {
            newBooks : books.map(book=>({
                title:book.title,
                author:book.author,
                isbn:book.isbn
            }))
        }
        res.render("books/index", {
            title: "books",
            books: newsBooksObject.newBooks
            
        })
    }

    //renderiza el formulario
    public renderFormBook(req: Request, res: Response): void{
        res.render("books/add",{title:"Add a Book"});
    }

    //guarda los libros en la db
    public async saveBooks(req: Request, res: Response){
        const {title, author, isbn} = req.body;
        const book: Book = new bookModel({title, author, isbn}); 
        await book.save();
        res.redirect('/books');
    }
}

const booksController = new BooksController();

export default booksController;
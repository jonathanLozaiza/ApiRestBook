import {Request, Response} from "express"

class IndexController{
    public index(req: Request, res:Response): void{
        res.render('index', {title:"Welcome to book app"});
    }
}

const indexController = new IndexController();

export default indexController;
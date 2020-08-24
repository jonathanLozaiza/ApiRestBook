import express from "express";
import exphbs from "express-handlebars";
import path from "path"
import IndexRoutes from "./routes/"
import BookRoutes from "./routes/books"

// initializations
const app = express();
import "./database";


//settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./libs/helpers"),
    defaultLayout: "main",
}));
app.set("view engine", ".hbs");

//Midlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use("/", IndexRoutes);
app.use("/books", BookRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
})





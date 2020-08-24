import mongoose from "mongoose"
import {mongodb} from "./keys"

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
}).then((db)=>console.log('Db is connect'))
.catch(error => console.log(error));
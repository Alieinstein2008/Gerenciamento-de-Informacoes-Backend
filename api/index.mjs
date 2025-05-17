import express from "express";
import cors from "cors";
import bodyParser  from "body-parser";
import ClienteRouters from "./src/routes/cliente.mjs";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(ClienteRouters);
app.listen(3000)





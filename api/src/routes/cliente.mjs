import express from "express";
import ClienteController from "../controllers/clienteController.mjs";

const ClienteRouters = express.Router();

ClienteRouters.get('/api/clientes', ClienteController.list);
ClienteRouters.get('/api/clientes/:id', ClienteController.show);
ClienteRouters.post('/api/clientes', ClienteController.create);
ClienteRouters.put('/api/clientes/:id', ClienteController.update);
ClienteRouters.delete('/api/clientes/:id', ClienteController.delete);

export default ClienteRouters;

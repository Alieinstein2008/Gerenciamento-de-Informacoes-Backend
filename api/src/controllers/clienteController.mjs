import { Sequelize } from "sequelize";
import Cliente from "../models/Cliente.mjs";

const ClienteController = {
    async list(request, response) {
        try {
            const obj = await Cliente.findAll();
            return response.json(obj);
        } catch (error) {
            return console.error('Erro ao retornar as informações dos clientes');
        }
    },
    async show(request, response) {
        try {
            const obj = await Cliente.findAll({
                where: Sequelize.or(
                    { ClienteID: request.params.id },
                    { NomeCliente: request.params.id },
                    { CPF: request.params.id },
                    { CEP: request.params.id },
                    { Telefone: request.params.id }
                )
            });
            return response = obj.length === 0 ? response.json({ erro: "Não consta no Banco de Dados" }) : response.json(obj);


        } catch (error) {
            return console.error('Erro ao retornar a informação do cliente', error);
        }
    },
    async create(request, response) {
        const { NomeCliente, CPF, Logradouro, Numero, Cidade, Estado, Pais, Telefone, Bairro, CEP, Complemento } = request.body.content;
        try {
            const obj = await Cliente.create({ NomeCliente, CPF, Logradouro, Numero, Cidade, Estado, Pais, Telefone, Bairro, CEP, Complemento });
            return response.json({
                msg: 'Informações adicionadas com sucesso.'
            });
        } catch (error) {
            console.error('Erro na inserção das informacoes do cliente');
        }
    },
    async update(request, response) {
        const { NomeCliente, CPF, Logradouro, Numero, Cidade, Estado, Pais, Telefone, Bairro, CEP, Complemento } = request.body.content;
        try {
            await Cliente.update({ NomeCliente, CPF, Logradouro, Numero, Cidade, Estado, Pais, Telefone, Bairro, CEP, Complemento }, { where: { ClienteID: request.params.id } });
            return response.json({
                msg: 'Informações atualizadas com sucesso.'
            });
        } catch (error) {
            return console.error('As informações não foram atualizadas', error);
        }
    },
    async delete(request, response) {
        try {
            await Cliente.destroy({ where: { ClienteID: request.params.id } });
            return response.json({
                msg: 'Informações excluídas com sucesso.'
            });
        } catch (error) {
            return console.error('As informações não foram excluídas', error);
        }
    }
};
export default ClienteController;
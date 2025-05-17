import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../db.mjs";

class Cliente extends Model { }

Cliente.init({
    ClienteID: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },

    NomeCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },

    CPF: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CEP: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Complemento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    }



}, { sequelize, modelName: 'cliente' });

sequelize.sync();

export default Cliente;

import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db/InformacoesGerais.db'
});

export default sequelize;

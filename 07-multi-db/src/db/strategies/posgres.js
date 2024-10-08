const Crud = require('./interfaces/crud')
const Sequelize = require('sequelize')

class Postgres extends Crud {
    constructor() {
        super()
        this._driver = null
        this._herois = null
    }

    async connect() {
       this._driver = new Sequelize(
            'heroes',
            'sysuser',
            'sysuser00',
            {
                host: 'localhost',
                dialect: 'postgres',
                port: 5432,
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        );
        await this._defineModel()
    }

    async isConnected() {
        try {
            await this._driver.authenticate()
            return true
        } catch(error) {
            console.error('Fail!', error)
            return false
        }
    }

    async _defineModel() {
        this._herois = this._driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                required: true
            },
            poder: {
                type: Sequelize.STRING,
                required: true
            }
        }, {
            tableName: 'tb_herois',
            freezeTableName: false,
            timestamps: false
        });
    
        await this._herois.sync()
    }

    async create(item) {
        const { dataValues } = await this._herois.create(item)
        return dataValues 
    }

    async read(item) {
        return await this._herois.findAll({ 
            where: item, 
            raw: true 
        })
    }

    async update(id, item) {
        return await this._herois.update(item, { 
            where: { 
                id : id 
            } 
        })
    }

    async delete(id) {
        const query = id ? { id } : {}
        return this._herois.destroy({ where: query })
    }

    
}

module.exports = Postgres
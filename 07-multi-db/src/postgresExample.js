// npm i sequelize pg-hstore pg

const Sequelize = require('sequelize')

const driver = new Sequelize(
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

async function main() {
    

   /*
     await Herois.create({
        nome: 'Lanterna Verde',
        poder: 'Anel'
    }) 
    */

    const result = await Herois.findAll({
        raw: true
    })

    console.log('result ', result)
   
}

main()
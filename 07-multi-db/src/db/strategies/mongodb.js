const Crud = require('./interfaces/crud')

class MongoDB extends Crud {
    constructor() {
        super()
    }

    create(item) {
        console.log("Item salvo Mongo.")
    }
}

module.exports = MongoDB
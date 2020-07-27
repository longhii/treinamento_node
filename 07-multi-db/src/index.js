const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDB = require('./db/strategies/mongodb')
const Postgres = require('./db/strategies/posgres')

const ctxMongo = new ContextStrategy(new MongoDB())
ctxMongo.create()


const ctxPost = new ContextStrategy(new Postgres())
ctxPost.create()


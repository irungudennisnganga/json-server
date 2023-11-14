const jsonserver=require("json-serve")
const server=jsonserver.create()
const router =jsonserver.router("db.json")
const middlewares = jsonserver.defaults()
const port =process.env.port || 3001


server.use(middlewares)
server.use(router)

server.listen(port)
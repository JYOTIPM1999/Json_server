// const { exec } = require("child_process");

// const port = process.env.PORT || 5000;

// const command = `json-server --watch db.json --port ${port}`;

// exec(command, (err, stdout, stderr) => {
//   if (err) {
//     console.log("Error running exec", err);
//     return;
//   }
//   console.log("stdout:", stdout);
//   console.log("stderr:", stderr);
// });

// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(3000, () => {
//   console.log("JSON Server is running");
// });
const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})

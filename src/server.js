console.log("###########################################");
console.log("server.js start");
console.log("###########################################");

const { DEFAULT_PORT } = require("@wrappid/service-core");

const __PORT = process.env.PORT || DEFAULT_PORT;

const serverInit = () => {
  console.log("###########################################");
  console.log(`Server is up and running on port ${__PORT}...`);
  console.log("###########################################");
};

const wrappidApp = require("./wrappidApp");

const server = wrappidApp.listen(__PORT, serverInit);

console.log("###########################################");
console.log("server.js end");
console.log("###########################################");

module.exports = server;

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Azure App Service via GitHub Actions 🚀");
});

server.listen(process.env.PORT || 3000);

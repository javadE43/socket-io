import express from "express";
import https from "https";
import http from "http";
import { Server } from "socket.io";
import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

//server
const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET"],
  },
});

io.on("connection", (socket) => {
  console.log(socket);
});

server.listen(PORT, () => {
  console.log("run server");
});

// option

const option = {
  hostname: "data.messari.io",
  port: 443,
  path: "/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd",
  method: "GET",
};

setInterval(() => {
  https
    .request(option, (res) => {
      let str = "";
      res.on("data", (chunk) => (str += chunk));
      res.on("end", () => {
        const price = JSON.parse(`${str}`)?.data?.map((item) => {
          return {
            id: item.id,
            name: item.symbol,
            slug: item.slug,
            price: item.metrics.market_data.price_usd,
            id: item.id,
          };
        });
        io.emit("crypto", price);
      });
    })
    .end();
}, 5000);

import Fastify from "fastify";
import ConnectDB from "./config/db.js";

import { stock } from "./Model/StockModel.js";
import { stockItems } from "./Data/stock.js";
import cors from "@fastify/cors";

const fastify = Fastify();

await fastify.register(cors, {});
ConnectDB();

fastify.get("/", getItem);

const PORT = process.env.PORT || 3045;

try {
  await fastify.listen({ port: PORT ,host:'0.0.0.0'});
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

const postItem = async (items) => {
  try {
    await Promise.all(
      items.map((val) => {
        const setStock = stock.create({
          RiskScore: val.RiskScore,
          NigStocks: val.NigStocks,
          ForeignStocks: val.ForeignStocks,
          TechStocks: val.TechStocks,
          EmergingStocks: val.EmergingStocks,
          NigerianBonds: val.NigerianBonds,
          ForeignBonds: val.ForeignBonds,
          commodities: val.commodities,
          RealEstate: val.RealEstate,
          Tbills: val.Tbills,
          Alternative: val.Alternative,
        });
      })
    );
    console.log("items successfully updated");
  } catch (error) {
    console.error(error, "check");
  }
};

// postItem(stockItems)

async function getItem(request, reply, next) {
  const stocks = await stock.find();
  reply.status(200).send(stocks);
  next();
}

import mongoose from "mongoose";

const { Schema } = mongoose;

const stockSchema = new Schema({
  RiskScore: {
    type: Number,
    required: true,
  },
  NigStocks: {
    type: Number,
    required: true,
  },
  ForeignStocks: {
    type: Number,
    required: true,
  },
  TechStocks: {
    type: Number,
    required: true,
  },
  EmergingStocks: {
    type: Number,
    required: true,
  },
  NigerianBonds: {
    type: Number,
    required: true,
  },
  ForeignBonds: {
    type: Number,
    required: true,
  },
  commodities: {
    type: Number,
    required: true,
  },
  RealEstate: {
    type: Number,
    required: true,
  },
  Tbills: {
    type: Number,
    required: true,
  },
  Alternative: {
    type: Number,
    required: true,
  },
});

export const stock = mongoose.model("Stock", stockSchema);

import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins = [
  "http://localhost:4000",
  "https://createbyadnan.vercel.app",
  "https://eznine.online",
  "*"
];

const corsConfig = cors({
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: true,
  origin: allowedOrigins,
});

export default corsConfig;

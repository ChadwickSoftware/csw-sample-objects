import Server from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

Server.listen(PORT, () => {
    console.log(`🚀 Listening on http://localhost:${PORT}`);
});
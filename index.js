require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    console.log("🟡 Step 1: Starting server...");

    await connectDB();
    console.log("🟢 Step 2: DB connected");

    app.use(express.json());
    console.log("🟢 Step 3: Middleware loaded");

    const router = require("./routes/router");
    app.use("/api", router);
    console.log("🟢 Step 4: Routes loaded");

    app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ Startup error:", err);
  }
})();

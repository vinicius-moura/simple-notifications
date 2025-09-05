const express = require("express");
const cors = require("cors");
const notificationsRouter = require("./routes/notifications");
const { connectRabbitMQ } = require("./rabbitmq");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// routes
app.use("/notifications", notificationsRouter);

connectRabbitMQ().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

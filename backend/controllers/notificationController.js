const { getChannel, getQueueName } = require("../rabbitmq");

const getNotification = (req, res) => {
  // empty
  res.status(200).json({ notifications: [] });
};

const createNotification = async (req, res) => {
  const { messageContent } = req.body;

  if (!messageContent || messageContent.trim() === "") {
    return res.status(400).json({ error: "messageContent can't be empty" });
  }

  const messageId = Date.now();
  const message = {
    messageId,
    messageContent: messageContent.trim(),
  };

  try {
    const channel = getChannel();
    const queueName = getQueueName();

    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });

    res.status(202).json({
      status: "accepted",
      messageId,
    });
  } catch (error) {
    console.error("Error publishing message to RabbitMQ:", error);
    res.status(500).json({ error: "Internal error processing message" });
  }
};

module.exports = {
  getNotification,
  createNotification,
};

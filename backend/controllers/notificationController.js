const getNotification = (req, res) => {
  // empty
  res.status(200).json({ notifications: [] });
};

const createNotification = (req, res) => {
  const { messageContent } = req.body;

  if (!messageContent || messageContent.trim() === "") {
    return res.status(400).json({ error: "messageContent can't be empty" });
  }

  const messageId = Date.now();

  res.status(201).json({
    status: "ok",
    messageId,
    messageContent: messageContent.trim()
  });
};

module.exports = {
  getNotification,
  createNotification
};

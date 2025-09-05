const amqp = require("amqplib");

const RABBIT_URL = "amqp://bjnuffmq:gj-YQIiEXyfxQxjsZtiYDKeXIT8ppUq7@jaragua-01.lmq.cloudamqp.com/";
const QUEUE_NAME = "fila.notificacao.entrada.ViniciusMoura";

let channel;

async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect(RABBIT_URL);

    channel = await connection.createChannel();
    await channel.assertQueue(QUEUE_NAME, { durable: true });
    console.log(`Connected to RabbitMQ, queue: ${QUEUE_NAME}`);
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error.message);
  }
}

function getChannel() {
  if (!channel) {
    throw new Error("RabbitMQ channel is not initialized yet.");
  }
  return channel;
}

function getQueueName() {
  return QUEUE_NAME;
}

module.exports = { connectRabbitMQ, getChannel, getQueueName };

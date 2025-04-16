const Queue = require('bull');
//Queue Process, deleted after send by worker
const emailQueue = new Queue('emailQueue', {
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
});

module.exports = emailQueue;

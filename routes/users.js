const express = require('express');
const { body,query, validationResult } = require('express-validator');
const router = express.Router();
const emailQueue = require('../queues/emailQueue');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

let users = [];

router.get('/', (req, res) => {
  res.json(users);
});

router.post(
  '/',
  [
    // Validate data from query parameters for GET
    query('name').notEmpty().withMessage('Name is required'),
    query('age').isInt({ min: 18, max: 35 }).withMessage('Age must be a valid number , Age must be between 18 - 35'),
    query('email').isEmail().withMessage('Valid email is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }

    // If no validation errors, proceed
    const { name, age, email } = req.query;

    const newUser = { name, age, email };
    users.push(newUser);

    //wait .add(newUser) promise to resolve
    await emailQueue.add(newUser);
    
    console.log(`Queued welcome email for ${newUser.email}`);

    res.status(StatusCodes.CREATED).json(newUser);
  }
);

module.exports = router;

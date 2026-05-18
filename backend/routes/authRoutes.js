const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const dynamoDB = require("../config/db");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const params = {
      TableName: "Users",
      Item: {
        email,
        name,
        password: hashedPassword,
        userId: uuidv4(),
      },
    };

    await dynamoDB.put(params).promise();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const params = {
      TableName: "Users",
      Key: {
        email,
      },
    };

    const user = await dynamoDB.get(params).promise();

    if (!user.Item) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.Item.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { email: user.Item.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: user.Item,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
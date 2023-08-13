// This is the server-side code that handles doctor registration.

// Import the necessary libraries and modules
const express = require('express');   // Express is a library for building web applications
const router = express.Router();   // Router helps manage different routes in the application

// Define a route for doctor registration
router.post('/register', async (req, res) => {
  try {
    // Get the "tokenId" from the data sent by the frontend
    const { tokenId } = req.body;

    // Process the Google ID token (validate, save to DB, etc.)
    const doctor = await processGoogleDoctorRegistration(tokenId);

    // Send a response with status code 201 (created) and the registered doctor's data
    res.status(201).json(doctor);
  } catch (error) {
    // If there's an error, send a response with status code 400 (bad request) and the error message
    res.status(400).json({ error: error.message });
  }
});

// Export the router to use it in other parts of the application
module.exports = router;

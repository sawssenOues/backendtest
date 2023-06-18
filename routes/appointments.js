const express = require('express');
const router = express.Router();
const { getAppointments, addAppointment } = require('../data/appointments');

router.post('/', (req, res) => {
  try {
    const { customerID, bookingDateTime } = req.body;

    // Validate customerID and bookingDateTime

    const newAppointment = {
      customerID,
      bookingDateTime,
    };

    addAppointment(newAppointment);

    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

////////////////////////////////////
/*
const express = require('express');
const router = express.Router();

let appointments = [];

router.post('/', (req, res) => {
  try {
    const { customerID, bookingDateTime } = req.body;

    // Validate customerID and bookingDateTime

    const appointment = {
      customerID,
      bookingDateTime,
    };

    appointments.push(appointment);

    res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
*/
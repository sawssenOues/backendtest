const express = require('express');
const router = express.Router();
const { getAppointmentsForCustomer } = require('../data/appointments');

router.get('/:customerID/appointments', (req, res) => {
  try {
    const { customerID } = req.params;

    const customerAppointments = getAppointmentsForCustomer(customerID);

    res.json(customerAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

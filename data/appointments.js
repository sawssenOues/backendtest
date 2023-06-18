const fs = require('fs');

const dataPath = './data/appointments.json';

const getAppointments = () => {
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
};

const addAppointment = (appointment) => {
  const appointments = getAppointments();
  appointments.push(appointment);
  fs.writeFileSync(dataPath, JSON.stringify(appointments, null, 2));
};

const getAppointmentsForCustomer = (customerID) => {
  const appointments = getAppointments();
  return appointments.filter(appointment => appointment.customerID === customerID);
};

module.exports = {
  getAppointments,
  addAppointment,
  getAppointmentsForCustomer,
};

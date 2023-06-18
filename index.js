const express = require('express');
const bodyParser = require('body-parser');
const appointmentsRouter = require('./routes/appointments');
const customersRouter = require('./routes/customers');

const app = express();
app.use(bodyParser.json());

app.use('/appointments', appointmentsRouter);
app.use('/customers', customersRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});



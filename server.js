const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{
  res.send('Hello World');
})
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('Received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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

const axios = require('axios');
let data = JSON.stringify({
  "format": "Default",
  "service": "express",
  "hook": {
    "uri": "https://webhook123.mydomain.com/track/push",
    "authentication": {
      "type": "ApiKeyAuthentication",
      "header": "pa$$word",
      "token": "pa$$word"
    }
  },
  "events": [
    "delivered"
  ],
  "type": "Account",
  "accountID": "string"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-test.dhl.com/tracking/push/v1/subscription',
  headers: { 
    'DHL-API-Key': 'process.env.DHL_API_KEY',
  'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

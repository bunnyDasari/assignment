const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');


const app = express();
const port = 7000




const db = admin.firestore();

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { Name,Email,Message } = req.body;
  if (typeof Name === 'undefined' || typeof Email === 'undefined' || typeof Message === 'undefined') {
    return res.status(400).send('All fields are required');
  }
  
  try {
    const dbId = await db.collection('users').add({
    Name,
    Email,
    Message,
    });
    res.status(200).send(`DocumentID: ${dbId.id}`);
  } catch (error) {
    console.error('Error', error);
    res.status(400).send('Error adding document');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

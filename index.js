const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.get('/webhook', (req, res) => {
  res.send('<h1>Webhook is listening</h1>');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
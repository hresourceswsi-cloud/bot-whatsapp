const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
  const message = req.body.Body;

  let response = "";

  if (message.toLowerCase() === 'hola') {
    response = "Hola 👋 escribe: TIME para ver tus horas";
  } 
  else if (message.toLowerCase() === 'time') {
    response = "🕒 Tus horas:\nLunes: 8h\nMartes: 7h\nTotal: 15h";
  } 
  else {
    response = "No entendí. Escribe TIME";
  }

  res.send(`
    <Response>
      <Message>${response}</Message>
    </Response>
  `);
});

app.listen(3000, () => console.log("Servidor corriendo"));
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send("Bot funcionando");
});

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo"));

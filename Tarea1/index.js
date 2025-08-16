const express = require('express');
const app = express();

const DATA = {
  nombre: "Aybson Diddiere Mercado Grijalva",
  carnet: "201700312",
  cancion_favorita: "Knockin on Heavens Door",
  autor: "Guns n Roses"
};

app.get('/', (_req, res) => {
  res.json(DATA);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
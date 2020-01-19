const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://mateus:mateus@cluster0-wkgy4.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
    
});

app.use(cors());
app.use(express.json());
app.use(routes);

//Tipos de parâmetros:

//Query Params: req.query (Filtros, ordenação, paginação, ...)
//Route Params: req.params (Identificar um recurso na alteração ou remoçao)
//Body: req.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)



app.listen(3333);
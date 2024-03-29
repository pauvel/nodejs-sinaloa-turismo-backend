const express = require('express');
const path = require('path');
require('dotenv').config();

// Db config
const { dbConnection } = require('./database/config').dbConnection();

// App de express.
const app = express();

// Lectura y parseo del body
app.use( express.json() );

// Node server
const server = require('http').createServer( app );
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Path publico
const publicPath = path.resolve(__dirname, 'public');

// Definicion de rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/lugares', require('./routes/lugares') );
app.use( '/api/noticias', require('./routes/noticias') );
app.use(express.static(publicPath));

server.listen( process.env.PORT, ( err ) => {
    if( err ) throw new Error(err);
    console.log(`Servidor corriendo en puerto`, process.env.PORT);
});
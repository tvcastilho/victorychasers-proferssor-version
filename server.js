import debug from 'debug';
debug('comp-229');

import http from 'http';

// import the app 
import app from './app/app.js';

// This is a testing comment 

// This is a second comment 

const PORT = normalizePort(process.env.PORT || 3000);
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);


// HELPER FUNCTIONS
function normalizePort(val){
    let port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port
    }

    return false;
}

function onError(){
    if(error.syscall !== 'listen'){
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code){
        case 'EACCESS':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    let addr = server.address();
    let bind = 'pipe ' + addr;
    debug('Listening on ' + bind);
    console.log('Listening on ', addr);
}

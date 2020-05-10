const EventEmmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmmitter {
    log(message) {
        //Send HTTP request
        console.log(message);

        //Raised an event
        this.emit('messageLogged', {id: 1, url: 'http:// '});
    }
}

module.exports = Logger;
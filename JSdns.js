const dns = require('dns');
const util = require('util');

function outputMs() {
    var d = new Date();
    var n = d.getUTCMilliseconds();
    return n;
}

var host = 'www.google.co.uk'; //change this!
const startTime = outputMs();

dns.lookup(host, 4, function (err, address, family) {
    if (err) {
        return util.log(host, 'is invalid, make sure the hostname is correct.')
    } else {
        util.log('IPv4 Address:', address);
    }
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            util.log(err.stack);
        }
        util.log('Reverse Lookup for ' + address + ': ' + JSON.stringify(hostnames));
        var totalTime = startTime - outputMs();
        return util.log('DNS Lookup of', host, 'took ' + totalTime + 'ms');

    })
})

var dns = require('dns');
var util = require('util');
    dnscache = require('dnscache')({
        "enable": true,
        "ttl": 300,
        "cachesize": 1000
});

function outputMs() {
    var d = new Date();
    var n = d.getUTCMilliseconds();
    return n;
}

var host = 'www.google.com'; //change this!
var startTime = outputMs();

dnscache.lookup(host, 4, (err, address, family) => {
    if (err) {
        return util.log(host, 'is invalid, make sure the hostname is correct.')
    } else {
        util.log('IPv4 Address:', address);
    }
    dnscache.reverse(address, (err, hostnames) => {
        if (err) {
            util.log(err.stack);
        }
        util.log('Reverse Lookup for ' + address + ': ' + JSON.stringify(hostnames));
        var totalTime = outputMs() - startTime;
        return util.log('DNS Lookup of', host, 'took ' + totalTime + 'ms');

    })
})

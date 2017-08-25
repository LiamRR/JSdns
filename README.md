# JSdns #
[![npm version](https://badge.fury.io/js/jsdns.svg)](https://badge.fury.io/js/jsdns)
[![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)](https://www.npmjs.com/package/jsdns)

### What? ###

JSdns is a simple client-side DNS resolver. Supply it with a hostname and it will resolve it to its IPv4 address and FQDN along with the amount of time it took in milliseconds (ms). 

### Why? ###

I'm new to the world of JavaScript, learning more and more each day. I'm currently a Jnr DevOps Engineer and this is a way for me to learn and also provide a practical module to use.

### How? ###

1) Install JSdns by running:

```javascript
npm install jsdns --save
```

2) Whatever host you want to lookup (google.co.uk for example), change the 'host' variable inside of the ' ' quotes. 

```javascript
...
var host = 'www.google.co.uk'; //This is the host you want to look up.
...
```

3) The output should be pretty readable. IP addresses and hostnames are clearly indicated as seen below:

```javascript
1 Jan 00:01:01 - IPv4 Address: 216.58.214.3  
1 Jan 00:01:01 - Reverse Lookup for 216.58.214.3: ["lhr26s05-in-f3.1e100.net","lhr26s05-in-f3.1e100.net"]  
1 Jan 00:01:01 - DNS Lookup of www.google.co.uk took 24ms 
```

4) JSdns now uses dnscache to wrap the dns module methods and provide a caching layer in between. The settings can be adjusted to suit your needs:

```javascript
var dns = require('dns');
var util = require('util');
    dnscache = require('dnscache')({
        "enable": true,
        "ttl": 300,
        "cachesize": 1000
});
...
```
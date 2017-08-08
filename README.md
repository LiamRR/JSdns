# JSdns.js #

### What? ###

JSdns.js is a simple client-side DNS resolver. Supply it with a hostname and it will will resolve it to an IP address and FQDN along with the amount of time it took in milliseconds (ms). 

### Why? ###

I'm new to JavaScript, learning more and more each day. I'm currently a Jnr DevOps Engineer and this is a way for me to learn and also provide a practical module to use.

### How? ###

1) Install JSdns by running:
  
`npm install jsdns`

2) Whatever host you want to lookup (google.co.uk for example), change the 'host' variable inside of the ' ' quotes.  

`var host = 'www.google.co.uk'; //This is the host you want to look up.`

3) Run JSdns by running 'node JSdns.js' and the output from the lookup will display in the console.

    $ node JSdns.js
    1 Jan 00:01:01 - IPv4 Address: 216.58.214.3  
    1 Jan 00:01:01 - Reverse Lookup for 216.58.214.3: ["lhr26s05-in-f3.1e100.net","lhr26s05-in-f3.1e100.net"]  
    1 Jan 00:01:01 - DNS Lookup of www.google.co.uk took -24ms
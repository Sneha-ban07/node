//creating server with node
using HTTP
method - createserver
need - 'url' module to parse urls

//creating express server
express app
easier, modular, more readability

// version
express: ^5.2.1

first version -> 5 (major release, code might break)
second version -> 2 (recommended bug fix/security fix, or some feature is added -- recommended to update)
third version -> 1 (minor fixes -- installation is optional, should not update untill confident. Normally do not change in existing projects. Go to documentation, check their version history and confirm what the changes were.)


express: ^5.2.1
what is this ^ symbol --> compatible with version, means keep 4 as it is. other 2 parts you can change. lock the first part.
(keep updating the bug fixes and minor changes -- auto updates those fixes. Whatever is compatible with version 5, install them, auto update them)

express: ~5.2.1
only update the third part. first 2 will be locked.

5.2.1 - update nothing. similarly we can give <, >, <=, =>.

also we can put 'latest' (do not keep latest in actual project)

//REST API
Representational state transfer
1. client server architecture - client server should not depend on each other.
2. SSR - server side rendering - send data in such a format (JSON, XML) that cthe client can show in their own way. If you are sure, that your client is a browser , send HTML. But if not sure about client, send json...client can do according to devide (browser, mobile, IOT devices)
3. GET, POST, PUT/PATCH,  DELETE - use methods properly. Like for update tasks, we have a patch method, then do not use post in that situation
res.send(html)
res.json({})
4. SSR is fast compared to CSR(client side rendering). sending direct html from server is faster.
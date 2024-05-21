# matrix-login-script
A simple little nodejs script to generate a fresh login for a matrix account

# Usage

 - Save `login.mjs` to your computer
 - Run `node login.mjs`
 - Enter your [delegated homeserver address](https://matrix-org.github.io/synapse/v1.40/delegate.html), username localpart, and password as instructed
 - It spits out the login information including the device id, MXID, and **Authentication Token**

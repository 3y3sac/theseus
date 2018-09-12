# Project Theseus

An experimental application to simplify identities on the web and regain control of personal data

## A Unified Application to Manage Your Digital Identities

Ever felt that you had too many accounts to take care of? Project Theseus aims to solve this by storing your account logins in one secure app so that you don't have to remember. Theseus will also store personal data locally rather than letting companies and organisations store it on their own webservers.

Check out https://github.com/ForsakenDurian/theseus-server if you want to see an example of what it will be capable of.

After an attempt to login is registered on that server, it will then send an "auth" event to the Theseus app (using socket.IO). After Theseus receives this "auth" event, then it will display a popup on the screen (ideally on the profile page) asking the user if they want to authenticate to the website. Theseus then sends back a "confirmed" event back to the webserver, who then allows the user to login to the website.

### Progress Checklist

- [x] Add routing for all Vue pages
- [x] Create basic UI for all pages
- [ ] Simulate app features
- [x] Find a template to use

#### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# lint all JS/Vue component files in `src/`
npm run lint
```

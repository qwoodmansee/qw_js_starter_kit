## General
  This is a project which can be used as a spin up for javascript projects. The choices made to create this project are listed below. Note that there are no specific general libraries included. A fork of the repo using Vue can be found at: https://github.com/qwoodmansee/qw_vue_starter_kit/

## Important decisions chosen:
  - Editor: VS Code with editorconfig extension
  - Package Management: npm
  - Security checks: Node security platform (npm run security-check)
  - Dev server: Express
  - Quick Show Off: localtunnel (lt --port # --subdomain [string] after -g install)
  - Automation: npm scripts + npm-run-all for parallelization 
  - Transpiling: babel
  - Unit Tests: Mocha / JSDOM
  - Continuous Integration: Travis-CI (for linux/OSX) and appveyor (for windows)
  - HTTP: Fetch
    - Mocking: Json Server w/ Json Schema Faker
  - Production Deployment: Surge
  

## Available scripts:
  - npm run start: starts dev server, running security checks and tests on save
  - npm run share: starts dev server with remote access via localtunnel
  - npm run test: runs unit tests
  - npm run generate-mock-data: generates mock data using the generateMockData script and schema. Writes the file to /src/api/db.json
  - npm run build: builds the project for deployment and starts a server so you can see it. Uses webpack.config.prod.js
  - npm run deploy: deploys the site using Surge. Requires build to be run before.


## Pointing to a real backend:
  Once you have a real backend set up, simply add the url to that backend to the src/api/baseUrl.js file's getBaseUrl function.

# containerized-london-houses-api

A rest api that serves the London houses dataset.
Docker containerization was used to run the application.

REST API will present a GET endpoint from which we can get a list of houses in a particular neighborhood.

$ npm install
<br />
$ node index.js

For example, you can get a list of homes in the Islington neighborhood by making a GET request to http://localhost:3001/houses/Islington.

After preparing your Dockerfile so you can run the application in docker, run the following command to create your Docker image:

$ docker build -t housing-api .
<br />
$ docker run -p 3000:3000 -d housing-api // Runs your docker image in a docker container
<br />
$ docker images // Displays your docker image

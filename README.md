# notes-app
This is a Node.js application that allows users to perform CRUD (Create, Read, Update, Delete) operations on notes stored in a MongoDB database. It provides a RESTful API for managing notes.

## Updates
 Fixed Mongoose Notes Query Issue 7.0.0

## Prerequisites
To run this application, you need the following:

* Database (MongoDB): MongoDB database to store notes data.
  Google Console Account: You'll need a Google Console Account to create the API Auth Keys for OAuth authentication.
* Environment Variables: Create a .env file to store your credentials. 

MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere
GOOGLE_CLIENT_ID= YOUR_GOOGLE_ID_HERE
GOOGLE_CLIENT_SECRET= YOUR_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:5000/google/callback

## Installation
  To install and run this project, follow these steps:

* Clone the repository:

$ git clone <repository-url>
$ cd notes-nodejs-crud-mongodb

Install dependencies using npm:

$ npm install
* Start the server:
$ npm start

* Access the application in your web browser at http://localhost:5000.

## Usage
Once the server is running, you can use the provided RESTful API endpoints to perform CRUD operations on notes. You can use tools like Postman or curl to interact with the API endpoints.



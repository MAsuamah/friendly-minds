# Friendly Minds

## Description
This application is the backend portion of a Social Networking web application named Friendly Minds. Users who use this app can share their thoughts, react to friends’ thoughts, and create a friend list. This app uses RESTful API routes to make requests. Express.js is used to create routes.
MongoDB is used to create the social network database. It uses collections and documents to create the Thought, Users, and Reactions Schemas. With this backend we are able to use GET, POST, PUT, and DELETE methods for the Schemas. 

## How to Install
* You will need to have MongoDB installed to use this app.
* Clone this repository onto your local machine ([How to Clone a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)).
* In your terminal `cd` into the root folder of friendly-minds.
* While in the root folder, you must first run `npm install` to load all the dependencies needed for the app to run.
 
## How to Use

### Start App
* To start the server run `npm start` or `node server.js`.
* To see all the routes at work using an API client like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) is recommended.

### Routes Available
Routes and methods available for this app are:
* For Users 
  * GET http://localhost:3001/api/users to get all users.
  * GET http://localhost:3001/api/users/:id to get users by id.
  * POST http://localhost:3001/api/users to create a user.
  * PUT http://localhost:3001/api/users/:id to update a user by id.
  * DELETE http://localhost:3001/api/users/:id to delete a user by id.
* For Friends 
  * POST http://localhost:3001/api/users/:userId/friends/:friendId to add a friend to a user.
  * DELETE http://localhost:3001/api/users/:userId/friends/:friendId to remove a friend from a user.
* For Thoughts 
  * GET http://localhost:3001/api/thoughts to get all thoughts.
  * GET http://localhost:3001/api/thoughts/:thoughtId to get a thought by id.
  * POST http://localhost:3001/api/thoughts to add a thought.
  * PUT http://localhost:3001/api/products/:thoughtId to update a thought by id.
  * DELETE http://localhost:3001/api/products/:thoughtId to delete a thought by id.
* For Reactions 
  * POST http://localhost:3001/api/thoughts/:thoughtId/reactions to add a reaction to a thought.
  * DELETE http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId to delete a reaction from a thought.


* For more on how to use an API client for this app see the [Walkthrough-Video](#walkthrough-video)

## Walkthrough-Video
https://drive.google.com/file/d/1HdrZE7h-U_g-1hw-LOAHcTC4LBy79BNu/view?usp=sharing

## Built With
* MongoDB
* Mongoose
* Node.js
* Express.js

## Contributors
Michelle Asuamah

## Contact
If you would like to contact me you can reach me at michey.asmah21@gmail.com.

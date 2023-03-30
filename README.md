# notes_backend_nodeJS
This is the notes app backend that I have created using NodeJS and ExpressJS. Feel free to contribute to this open source repo. I would love your feedback about my code.
This is the backend for notes app, I will create its front end in flutter mobile applicaiton.

 step 1: initialize npm in the project to install other packages in libraries in the folder.
 > npm init
 Step 2:Now to use express js, install the express package
 > npm install express   // it will install expressJS inside node_module folder
Step 3: Now to connect our NodeJS server and MongoDB database we will use Mongoose package
 > npm install mongoose
 
 Now there is problem, when a make a small change and want to reflect it on web browser
 first I have to stop the runing server and again start it. so it will take a lot of time 
 to make server in this manner. So we have a solution of Hot reloading and Hot Restart feature 
 in Node that will reflect our changes directly on web without restarting the whole project, So 
 we will use [nodemone]
 > npm install -g nodemone

 Before we run through this comman [node server.js], Now with nodemon I will run 
 through this command [nodemone server.js]
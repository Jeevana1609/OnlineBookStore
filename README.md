# OnlineBookStore
The Online Bookstore System is a full-stack application built with Node.js, Express.js, MySQL for transactional data, and MongoDB for non-transactional data. It manages books, authors, customers, and orders, showcasing the integration of different database technologies.
Features
Manages books, authors, customers, and orders.
SQL for handling transactional data (customers, orders, order details).
MongoDB for storing books, authors, and reviews.
CRUD operations for SQL and MongoDB.
Placing orders (transaction handling in SQL) and generating reports (using MongoDB's aggregation framework).

Prerequisites
Ensure you have the following installed:
 [Node.js](https://nodejs.org/) (which includes npm)
 [MySQL](https://www.mysql.com/) database server
 [MongoDB](https://www.mongodb.com/) server

Installation
 Install dependencies:

   ```bash
   cd online-bookstore
   npm install
   ```
Configure SQL and MongoDB connections:
Open `app.js` and update SQL connection details (`sqlConnection`) and MongoDB connection (`mongoose.connect`) according to your setup.

Usage
Start the server:
```bash
npm start
```
The server will start on `http://localhost:3000`.
You can interact with the API endpoints using tools like Postman or cURL:

`POST /placeOrder`: Place a new order
`GET /books`: Fetch all books
`GET /topSellingBooks`: Get top-selling books report
 Endpoints
You can expand these routes or add new ones as required._

Database Setup
SQL Database
 Create the necessary tables (`Customers`, `Orders`, `OrderDetails`) using SQL statements provided in your application.

MongoDB
Ensure MongoDB is running and create the required collections (`Books`, `Authors`, `Reviews`) with appropriate schemas based on your application's needs.

 Technologies Used
Node.js
Express.js
MySQL
MongoDB
Mongoose (for MongoDB)

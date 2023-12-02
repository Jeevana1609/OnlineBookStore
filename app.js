const express = require('express');
const app = express();
const mysql = require('mysql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// SQL Database Connection
const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'your_sql_username',
    password: 'your_sql_password',
    database: 'your_sql_database',
});

sqlConnection.connect((err) => {
    if (err) throw err;
    console.log('Connected to SQL database');
});

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/your_mongodb_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoDB.once('open', () => {
    console.log('Connected to MongoDB database');
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

function validateOrderData(req, res, next) {
    const { customerId, bookId, quantity } = req.body;

    if (!customerId || !bookId || !quantity || isNaN(quantity)) {
        return res.status(400).send('Invalid order data');
    }
    next();
}

app.post('/placeOrder', validateOrderData, async (req, res) => {
});


const Book = require('./models/book'); 

describe('SQL Operations', () => {
    it('should connect to the SQL database', (done) => {
        sqlConnection.query('SELECT 1 + 1 AS solution', (err, result) => {
            if (err) throw err;
            if (result[0].solution === 2) {
                done();
            } else {
                done(new Error('SQL Connection test failed'));
            }
        });
    });

    it('should validate order data', (done) => {
        const req = { body: { customerId: 1, bookId: 1, quantity: 'abc' } };
        const res = {
            status(code) {
                this.statusCode = code;
                return this;
            },
            send(message) {
                if (message === 'Invalid order data' && this.statusCode === 400) {
                    done();
                } else {
                    done(new Error('Order data validation test failed'));
                }
            },
        };
        validateOrderData(req, res, () => {});
    });
});

describe('MongoDB Operations', () => {
    it('should connect to the MongoDB database', (done) => {
        // Test MongoDB connection
        Book.find({}, (err) => {
            if (err) {
                done(new Error('MongoDB connection test failed'));
            } else {
                done();
            }
        });
    });

});


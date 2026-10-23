require('dotenv').config();
const express = require ('express');
const app = express();

// import routes
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const movieRoutes = require ('./routes/movieRoutes');

// MIDDLEWARES GLOBAL
app.use(express.json());

// Mounthing Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/movies', movieRoutes);

//basic error handling
app.use((error,err, req, res, next) =>{
    console.error(error,err);
    res.status(err,error.status || 500).json({error:err.message || 'Internal server error'});

})

//start
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`SERVER BERJALAN DI ${PORT}`)
})
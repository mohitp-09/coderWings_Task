const express = require('express');
const app = express();
const userSchema = require('./models');
const productSchema = require('./product.model');
const jwt = require('jsonwebtoken');
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res)=>{
    res.render('home');
})


// user registration and login

app.post('/create', async (req, res)=>{
    let {name, email, password} = req.body;
    const alreadyUser = await userSchema.findOne({email});
    if(alreadyUser){
        console.log("already user");
    }else{
        const createdUser = await userSchema.create({name, email, password});
        res.send()
        console.log(createdUser);
    }
})

app.post('/login', async (req, res)=>{
    let {email, password} = req.body;
    const loginUser = await userSchema.create({ email, password});
    console.log(loginUser);
    const token = jwt.sign(
      { id: userSchema._id, email: userSchema.email },
      "secret"
    );
     res.cookie('token', token, {
        httpOnly: true,
    });
    // res.render('product');
    console.log(token);
    res.status(200).send("login....");

})

app.get('/login', (req, res)=>{
    res.render('login');
})


// Product API

app.post('/addproduct', async (req, res)=>{
    let {name, price} = req.body;
    const productCreated = await productSchema.create({name, price});
    console.log(productCreated);
})

app.get('/allproducts', async (req, res)=>{
    const allProduct = await productSchema.find();
    console.log(allProduct);
})

// cart

app.post('/addtocart', (req, res)=>{
    const userId = await userSchema.findById()
})

app.listen(3000, ()=>{
    console.log('running...');
})

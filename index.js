const express = require('express');

const port = 9090;

const app = express();

let users = []

app.set('view engine', 'ejs');

app.use(express.urlencoded());


app.get('/', (req, res) => {
    return res.render('index',{
        all : users
    })
   
})

app.post('/insertRecord', (req, res) => {
    const { name, phone } = req.body;
    let obj =
    {
        id: Math.floor(Math.random() * 1000000),
        name: name,
        phone: phone,
    }
    users.push(obj);
    console.log(`server stsrt on port :-${port}`);
    return res.redirect('/');
})

app.get('/deletUser',(req,res)=>{
    let id =req.query.deletId;
    let d=users.filter(val=> val.id !== id)
    users=d;
    console.log("users succesfully add");
    return res.redirect('/')
    
})

app.post('updateUser',(req,res)=>{
    const {editid,name,phone} =req.body;

    
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is runningv : ${port}`);
})





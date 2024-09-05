// // var fs=require('fs');
// // var os=require('os');

// // var user=os.userInfo()

// //  //now user is an object we can store it;

// // console.log(user.username)

// // fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>{
// //     console.log('file is created');
// // });


// //new module Lodash ok saurabh 


// // var  _=require('lodash');

// // var data=["person","person",1,2,3,4,5,3,'age','name'];

// // var filter=_.uniq(data);
// // console.log(filter)

// // const notes=require('./notes');
 
// // console.log(notes);

// // console.log(notes.age)

// // console.log(notes.result(3,4))



// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/swetha', function (req, res) {
//   var lover={
//     name:'swetha',
//     size:'100',
//     is_love:true,


//   }

//     res.send(lover)
//   })

// app.listen(3000,()=>{
//     console.log('server is listening')
// })



//day4 learning of nodejs

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Person = require('./models/Person');
const db = require('./db');

// Use POST instead of GET


const MenuItem =require('./models/MenuItem')


app.post('/menu', async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
app.get('/menu', async (req, res) => {
    try {
      const menuItems = await MenuItem.find(); // Fetch all menu items
      res.status(200).json(menuItems);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


const personRoutes=require('./routes/personRoutes');

app.use('/person',personRoutes);


  

app.listen(3000, () => {
    console.log('Listening on port 3000');
});





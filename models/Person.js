
const mongoose= require('mongoose');

const personSchema=new mongoose.Schema({
      name:{
        type:String,
        required:true,

      },
      age:{
        type:Number,
      }

       ,
       work:{
        type:String,
         enum:['Chef','waiter','manger'],
        required:true,

      },

      mobile:{
        type:String,
        required:true,
      }
      ,
      email:{
        type:String,
        required:true,
        unique:true,
    
      },

      adress:{
        type:Number
      }
      ,
      salary:{
          type:Number,
          required:true,

      }
      
})

//  now model 

const person=mongoose.model('Person',personSchema);

module.exports=person
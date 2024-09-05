
const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem')

router.post('/menu', async (req, res) => {
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

  
router.get('/menu', async (req, res) => {
    try {
      const menuItems = await MenuItem.find(); // Fetch all menu items
      res.status(200).json(menuItems);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  //hey
  
  module.exports=router
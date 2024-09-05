const express=require('express');
const router=express.Router();
const Person=require('./../models/Person')


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();

        console.log('Data has been saved');
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log('Error saving person', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const people = await Person.find(); // Fetch all documents from the 'Person' collection
        res.status(200).json(people); // Respond with the retrieved data
    } catch (error) {
        console.log('Error retrieving people', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('//:workType', async (req, res) => {
    try {
      const workType = req.params.workType; // Extract the work type from the URL parameter
  
      // Check if the work type is valid
      if (workType === 'Chef' || workType === 'manger' || workType === 'waiter') {
        const response = await Person.find({ work: workType }); // Find people with the given work type
        console.log('Response fetched:', response);
        res.status(200).json(response); // Send the fetched response as JSON
      } else {
        res.status(404).json({ error: 'Invalid work type' }); // If work type is invalid, send a 404 error
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle any server errors
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const personId = req.params.id; // Extract the id from the URL parameter
      const updatedPersonData = req.body; // Updated data for the person
  
      const response = await Person.findByIdAndUpdate(
        personId,
        updatedPersonData,
        {
          new: true, // Return the updated document
          runValidators: true // Run Mongoose validation
        }
      );
  
      if (!response) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      console.log('Data updated:', response);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports=router
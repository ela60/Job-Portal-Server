require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());


// jobPortal
// rrw5ijVKTc36avJB



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kisu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
      // Connect the client to the server	(optional starting in v4.7)
      
      // await client.connect();
      
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");

      //   jobs related apis
      const jobsCollection = client.db('JobPortal').collection('Jobs');

      app.get('/jobs', async (req, res) => {
          const cursor = jobsCollection.find();
          const result=await cursor
      })
      



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('job is falling from the sky');
})


app.listen(port, () => {
    console.log(`job is waiting at ${port}`);
})










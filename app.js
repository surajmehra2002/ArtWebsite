const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;
                                                                                                                                                    // mongoose.connect('mongodb+srv://programmingwithsuraj123:x5C1827G60KWa3Ik@db-mongodb-nyc1-44065-618e2d0f.mongo.ondigitalocean.com/surajmehra?authSource=admin&replicaSet=db-mongodb-nyc1-44065&tls=true');
const mydb = "mongodb+srv://codewithsuraj:surajsinghmehra@cluster0.yveoypo.mongodb.net/test"                                                                                                                                                       // mongoose.connect('mongodb+srv://programmingwithsuraj123:x5C1827G60KWa3Ik@db-mongodb-nyc1-44065-618e2d0f.mongo.ondigitalocean.com/surajmehra?authSource=admin&replicaSet=db-mongodb-nyc1-44065&tls=true');
mongoose.connect(mydb, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));


var KittySchema = new mongoose.Schema(
    {connect_us_information : Object}

  );

var documents = mongoose.model('dock2', KittySchema);


KittySchema.methods.speak= function(){
    
    console.log(req.body);
  }


  

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use('/gallery', express.static('gallery')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get("/contact", (req, res)=>{ 
    const params = {}
    res.status(200).render('contact.pug', params);
});
app.get("/about", (req, res)=>{ 
    const params = {}
    res.status(200).render('about.pug', params);
});
app.get("/information", (req, res)=>{ 
    const params = {}
    res.status(200).render('information.pug', params);
});
app.get("/gallery", (req, res)=>{ 
    const params = {}
    res.status(200).render('gallery.pug', params);
});

app.post('/contact', (req, res)=>{
    var data = new documents({connect_us_information:req.body});
    
     let pname = req.body.name
     let phone = req.body.phone
     let email = req.body.email
    // concern = req.body.concern
    

    // let outputToWrite = `The name of the client is ${name} which phone no and email id is ${phone} and ${email} , the concern of this cuntomer are here: ${concern}`
    // fs.writeFileSync('../../../pawan.txt', obj)


    

    

      
    

    
    // const params = {'message': 'Your form has been submitted successfully'}
    if (pname != ""&&phone != ""&&email != ""){
        data.save(function(err){
            if (err) return console.error(err);
            // b.speak();
          });
            res.status(200).render('massage.pug');
    }
    
    else{
            res.status(200).render('amassage.pug');

    }

    

})






// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

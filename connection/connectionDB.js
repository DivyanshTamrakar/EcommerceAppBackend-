var mongoose = require('mongoose');


function initializeConnection(){

  const url = "mongodb+srv://divyansh:tamrakar@neog-cluster.j0bu3.mongodb.net/inventory";
mongoose.connect(url,{
  useNewUrlParser:true,
  useUnifiedTopology:true
  
  
}).then(()=>console.log("successfully connected"))
.catch(error => console.error("mongoose connection failed", error))

}

module.exports = { initializeConnection }








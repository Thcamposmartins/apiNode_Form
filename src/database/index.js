const mongoose = require('mongoose');

mongoose.connect("mongodb+srv", {useMongoClient:true, useNewUrlParser: true,  useUnifiedTopology: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;




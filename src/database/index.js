const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://thcampos:thcampos_@nodeform.aaxwt.mongodb.net/nodeteste?retryWrites=true&w=majority", {useMongoClient:true, useNewUrlParser: true,  useUnifiedTopology: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;




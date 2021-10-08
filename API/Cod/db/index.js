const mongoose = require("../db");

mongoose.connect("mongodb://localhost/noderest", {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
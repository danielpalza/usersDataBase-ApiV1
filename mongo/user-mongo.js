const mongoose = require('mongoose');

const { Schema } = mongoose;

// defino el esquema

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true }
  
});

const model = mongoose.model("Person", userSchema);
module.exports = model;
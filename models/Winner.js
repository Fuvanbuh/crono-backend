const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const winnerSchema = new Schema({
  winnerName: { type: String },
  mail: { type: String },
  wins: { type: Number }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Winner = mongoose.model('Winner', winnerSchema);

module.exports = Winner;
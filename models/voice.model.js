const mongoose = require('mongoose');

const voiceSchema = mongoose.Schema({
    title: { type: String },
    userId:{type:String},
    source:Buffer,
    duration: { type: String},
    date: { type: Date, default: Date.now } 
}, { timestamps: true });

const VoiceModel = mongoose.model('Voice', voiceSchema);

module.exports = VoiceModel;

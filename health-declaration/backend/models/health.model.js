const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        temperature: {
            type: Number,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Health = mongoose.model('health', healthSchema);

module.exports = Health;

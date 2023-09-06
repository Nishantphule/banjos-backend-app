const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Object,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }
})

menuSchema.plugin(uniqueValidator);


menuSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.itemId = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
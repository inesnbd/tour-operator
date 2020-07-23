var vol = require('../schema/vol');

exports.vol = mongoose.model('vol', vol.schema);
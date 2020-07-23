exports.schema = new mangoose.Schema({

    country: String,
    city: String,
    price: {type : Number}
}
)
var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('tourOperator');
var id = pow.createObjectId;

fixtures.load({
    planes: [
        {
            "_id": id(),
            "country":"Espagne",
            "city":"Barcelone",
            "price":"60",
        },
        {
            "_id": id(),
            "country":"Italie",
            "city":"Rome",
            "price":"130",
        },
        {
            "_id": id(),
            "country":"Portugal",
            "city":"Lisbonne",
            "price":"100",
        }
    ]
});
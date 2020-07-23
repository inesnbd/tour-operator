
// recuperer une collection
exports.index = function(req, res){
    // var options = { country: req.params.country};
    var returnResponse = function(collection){
        res.json(collection);
    };

   models.vol.findAsync()
       .then(logLib.logContent)
       .then(returnResponse);

};


// recuperer un objet
exports.one = function(req, res){
    var options = { country: req.params.country};
    var returnResponse = function(obj){
        res.json(obj);
    };

   models.vol.findOneAsync(options)
       .then(logLib.logContent)
       .then(returnResponse);

};

exports.create = function(req, res){
    var returnResponse = function(obj){
        res.json(obj);
    };

    var options = {country: req.params.country};

    models.vol.findOneAsync(options)
        .then(logLib, logContent)
        .then(returnResponse);

};
// methode d'update
exports.update = function(req, res){
    var returnResponse = function(obj){
        res.json(obj);
    };

    var options = {_id: req.body._id};

    var returnUpdatObject = function(){
        models.vol.findOneAsync(options)
        .then(logLib, logContent)
        .then(returnResponse);

    };

    delete req.body('_id');

    models.vol.findOneAndUpdateAsync(options, req.body)
        .then(returnUpdatObject);
};


exports.delete = function(req, res){
    var returnResponse = function(){
        res.json({message: 'tout est ok'});
    };

    var returnError = function(){
        res.status(500).json({message: 'PROBLEME'});
    }
    var options = {_id: req.params._id};

    models.vol.findOneAndRemoveAsync(options)
        .catch(logLib, throwError)
        .done(returnResponse, returnError);
    

};
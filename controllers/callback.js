/**
 * Index action
 * 
 * @param req
 * @param res
 */

exports.index =  function(req, res){
    var returnResponseOfFileJson = function(content){
        res.json(content);
    };

    var returnError = function (){
        res.send('ERROR', 500);
    };
    
    fs.readFileAsync('test.json')
        .then(logLib, logContent)
        .then(JSON.parse)
        .catch(logLib, throwError)
        .done(returnResponseOfFileJson);

    console.log('autre');

};
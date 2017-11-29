var request = require('request');

exports.getMusicAPIData = function getData(url, session, callback){
    
        request.get(url, function processGetRequest(err,res,body){
            if(err){
                console.log(err);
            }else {
                callback(body, session);
            }
        });
    };

const mongodb = require('mongodb')

mongodb.connect('mongodb://localhost:27017/portfolio',
                {useNewUrlParser: true, useUnifiedTopology: true},
                function(err, client){
                    if(err){
                        console.log(err)
                    }
                    else{
                        module.exports = client
                    }
                })
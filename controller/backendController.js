exports.regsiter = function(req, res){
    res.render('backend/register')
}

exports.login = function(req, res){
    res.render('backend/login')
}

exports.blank = function(req, res){
    res.render('backend/main')
}

exports.create_user = function(req, res){
    console.log(req.body)
}
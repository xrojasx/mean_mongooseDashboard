
var mongoose = require('mongoose');
const Dog = mongoose.model('Dog');
module.exports = {
    show: function(req, res) {
        Dog.find({}, function(err, results){
            if (err) { console.log(err); }
            res.render('index', { dogs: results });
            });
    },
    create: function(req,res){
        var dog = new Dog({name: req.body.name, weight: req.body.weight, color: req.body.color})
        dog.save(function(err, result){
            if (err) { console.log(err); }
            res.redirect('/')
            });
    },
    find: function(req,res){
        Dog.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('show', { dog: response[0] });
            });
    },
    edit: function(req,res){
        Dog.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('edit', { dog: response[0] });
            })
    },
    update: function(req,res){
        Dog.update({ _id: req.params.id }, req.body, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/');
            });
    },
    delete: function(req,res){
        Dog.remove({ _id: req.params.id }, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/');
            });
    }
}
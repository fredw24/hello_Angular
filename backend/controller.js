const Task = require("./model");

module.exports = {
    users: function (req, res){
        console.log("Hitting controller");
        Task.find({},(err,data)=>{
            if(err){
                res.json({message: "Error", error: err})
            }else{
                res.json({message: "Success", data: data})
            }
        })

    },
    // promise version and better
    // example: function (req, res){
    //     Task.find({})
    //         .then(data=>res.json({message: "Success", data: data}))
    //         .catch(err=>res.json({message: "Error", error: err}))
    // },
    getone: function(req, res){
        console.log("Get Task");
        Task.find({_id: req.params.id}, function(err, user){

            if(err){
                console.log('Something went wrong on display');
                res.json({message: "Error", error: err})

            }else{
                res.json({message: "Found", data: user})

            }


        })
        
    },

    // getone: function(req, res){
    //     console.log("Get Task");
    //     Task.findById(req.params.id,(err, user)=>{

    //         .catch(err){
    //             console.log('Something went wrong on display');
    //             res.json({message: "Error", error: err})

    //         }else{
    //             res.json({message: "Found", data: user})

    //         }


    //     })
        
    // },
    create: function(req, res){
        console.log("Create User", req.body);
        var newTask = new Task(req.body);

        newTask.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err})
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success", data: newTask})

            
            }
            
          })


    },
    update: function(req, res){

        console.log("Update User", req.body)
        Task.findOne({ _id : req.params.id }, function(err, task){
            task.title = req.body.title;
            task.description = req.body.description;
            task.save(function(err){

                res.json({message: "Updated", data: task})

            })


        })


    },
    delete: function(req, res){
        console.log("Remove User", req.params.id);
        Task.remove({_id: req.params.id}, function(err){

            if(err){
                console.log("something went wrong on remove");
                res.json({message: "Error", error: err})

            }else {
                res.json({message: "Success You have removed"})

            }


        })

    }



}
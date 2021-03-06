const express = require("express");
const routes = express.Router();

//importing modules
const create = require('../controller/modules/create')
const dlt = require('../controller/modules/delete')
const retrieve = require('../controller/modules/retrieve')
const update = require('../controller/modules/update')
const  admin_account = require('../controller/create_default_account')
const admin_info = require('../controller/modules/admin_data')

//creating routes
routes.route("/createroute").post((req, res) => {
    console.log('asa na ka');
    console.log(req.body);
    create.create_route(req.body,res);
})

// routes.route("/createplaces").post((req,res) => {
//     create.create_places(req,res);
// })


//creating admin default account

routes.route("/install").all((req,res) => {    
    admin_account.create_default_account(req,res);
})

// routes.route("/admindata").get((req,res) => {
//     // console.log(req.body);
//     admin_info.retrieve_admin(req,res);
//     console.log("req.body")
// })
routes.route('/admindata/:username/:password').get((req, res) => {
    admin_info.retrieve_admin(req.params.username, req.params.password, res);
})
//deleting routes
routes.route("/deleteroute/:id").delete((req,res) => {
    dlt.delete_route(req,res);
})

routes.route("/deleteplaces/:place").delete((req,res) => {
    dlt.delete_places(req.params.place,res);
})

//retrieving routes
routes.route("/retrieveAll").get((req,res) => {
    retrieve.retrieveAll_route(req,res);
})

//updating routes
routes.route("/updateroute/:id").post((req,res) => {
    update.update_route(req,res);
})

routes.route("/updateplaces/:id").post((req,res) => {
    update.update_places(req,res);
})

//getting data from admin

//exporting routes
module.exports = routes
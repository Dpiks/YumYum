// getFooditemByCuisine.js



const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");


// Get the fooditems by selected cuisine
const getFooditemsByCuisine = function(req, res) {
    Cook.findOne({ "cuisine": req.params.cuisine })
        // ..and populate all of the fooditems associated with it
        .populate("fooditems")
        .exec(function(error, doc) {            
            if (error) {
                res.json({ error: "sorry no food item found in the cuisine selected" });
            }
            // Otherwise, send the doc to the browser as a json object
            else {
                res.json(doc.fooditems);
            }
        });
}

module.exports = getFooditemsByCuisine;
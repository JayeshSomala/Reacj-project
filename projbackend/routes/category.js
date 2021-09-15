var express = require('express')
var router = express.Router();

const {
    getCategoryById, 
    createCategory, 
    getCategory, 
    getAllCategory, 
    updateCategory, 
    removeCategory
} = require("../controllers/category")
const {
    isSignedIn, 
    isAdmin,
    isAutenticated
} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


// params
router.param("userId" , getUserById);
router.param("categoryId" , getCategoryById);

//actual routes goes here

//create

router.post(
    "/category/create/:userId", 
    isSignedIn, 
    isAutenticated, 
    isAdmin, 
    createCategory
);


//read routes
router.get("/category/:categoryId", getCategory);
router.get("/categorys", getAllCategory);


//update route
router.put(
    "/category/:categoryId/:userId", 
    isSignedIn, 
    isAutenticated, 
    isAdmin, 
    updateCategory
);


//delete route
router.delete(
    "/category/:categoryId/:userId", 
    isSignedIn, 
    isAutenticated, 
    isAdmin, 
    removeCategory
);


module.exports = router;
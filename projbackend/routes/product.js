var express = require('express');
var router = express.Router();

const {getProductById, createProducts, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUniqueCategories} = require("../controllers/product");
const {isSignedIn, isAutenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");


//params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all actual routes
router.post(
    "/product/create/:userId", 
    isSignedIn, 
    isAutenticated, 
    isAdmin, 
    createProducts
);

//read routs
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete route
router.delete("/product/:productId/:userId",
isSignedIn,
isAutenticated,
isAdmin,
deleteProduct
)

//update route
router.delete("/product/:productId/:userId",
isSignedIn,
isAutenticated,
isAdmin,
updateProduct
)

//listing route
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;
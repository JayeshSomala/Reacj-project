var express = require('express');
var router = express.Router();

const {isSignedIn, isAutenticated, isAdmin} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");
const {getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus} = require("../controllers/order");

//params
router.param("userId", getUserById)
router.param("orderId", getOrderById)

//actual routes
//create
router.post("order/create/:userId",
isSignedIn, 
isAutenticated,
pushOrderInPurchaseList, 
updateStock, 
createOrder
);

//read
router.get("/order/all/:usedId", 
isSignedIn, 
isAutenticated,
isAdmin,
getAllOrders
);

//status of order
router.get("/order/status/:userId",
isSignedIn, 
isAutenticated,
isAdmin,
getOrderStatus
)
router.put("/order/:orderId/status/:userId",
isSignedIn, 
isAutenticated,
isAdmin,
updateStatus
);


module.exports = router;
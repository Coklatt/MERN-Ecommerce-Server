const express = require('express');
const router = express.Router();
const {
    getAllProduct,
    getProductsByCategory,
    getProductsByPrice,
    getWishProducts,
    getCartProducts,
    postAddProduct,
    postEditProduct,
    getDeleteProducts,
    getSingleProduct,
    postAddReview,
    deleteReview,
} = require('../controller/products');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/products');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get('/all-product', getAllProduct);
router.post('/product-by-category', getProductsByCategory);
router.post('/product-by-price', getProductsByPrice);
router.post('/wish-product', getWishProducts);
router.post('/cart-product', getCartProducts);

router.post('/add-product', upload.any(), postAddProduct);
router.post('/edit-product', upload.any(), postEditProduct);
router.post('/delete-product', getDeleteProducts);
router.post('/single-product', getSingleProduct);

router.post('/add-review', postAddReview);
router.post('/delete-review', deleteReview);

module.exports = router;

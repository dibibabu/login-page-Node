var express = require('express');
var router = express.Router();

const products = [{
  name: "G-Shock",
  Model: "GAB2100-1A",
  prize: "65,000",
  image: "  "
},
{
  name: "G-Shock",
  Model: "GBA2900-5a-1A",
  prize: "85,000",
  image: "https://gshock.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GA/GA2/ga-2100-1a2/assets/GA-2100-1A2.png.transform/product-panel/image.png"
},

{
  name: "G-shock",
  Model: "GTGB3000B",
  prize: "105,000",
  image: "https://gshock.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GA/GA2/ga-2100-1a4/assets/GA-2100-1A4.png.transform/product-panel/image.png"
},
{
  name: "G-shock",
  Model: "GTGB3000B",
  prize: "105,000",
  image: "https://gshock.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GA/GA2/ga-2100-1a3/assets/GA-2100-1A3.png.transform/product-panel/image.png"
},]




/* GET users listing. */
router.get('/', function (req, res, next) {

  if (req.session.login) {
    res.render('home', { products });
  } else {
    res.redirect('/')
  }

});

module.exports = router;

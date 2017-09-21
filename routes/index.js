var express = require('express');
var router = express.Router();
var graphData;
var formattedData = new Object;

function formatData(callback) {

  for(var key in graphData) {
    var dataItemsArray = new Array;
    dataItemsArray = key.split(',');
    formattedData[graphData[key]] = dataItemsArray;
  } 
  
  callback(formattedData);
}


router.post('/', function(req, res, next) {
  
  graphData = req.body;
  res.status(200).json({
    "message":"data_saved"
  });

});

router.get('/getDataforTree', function (req, res, next) {

  formatData(function (data) {
    res.status(200).json(data);
  });

});

router.get('/', function(req, res, next) {
  res.render('index', {title:"Web Mining"});
});



module.exports = router;

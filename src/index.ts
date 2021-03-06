// let express = require('express')
// let router = express.Router()
//
// const axios = require('axios');
// let moment = require('moment');
//
// let jsonList = require('../json/list.json')

import express from "express";
const router = express()

import axios = require('axios');
import moment = require('moment');

import jsonList = require('../json/list.json')

// const asyncHandler = fn => (req, res, next) =>
//   Promise
//     .resolve(fn(req, res, next))
//     .catch(next)


router.get('/transactions', (req, res) => {
  return res.json({
    "status": 200,
    "data": jsonList
  });
});


// write test to check if:
// - all parameters are in, give success
// - if missing parameters, give error
router.post('/transactions', (req, res, next) => {
  const epoch = req.body.epoch;
  const txid = req.body.txid;
  const txFrom = req.body.txFrom;
  const txTo = req.body.txTo;
  const txAmount = req.body.txAmount;
  const currency = req.body.currency;

  try{
    if(epoch && txid && txFrom && txTo && txAmount && currency){
      return res.json({
        "status": 200,
        "epoch": epoch,
        "txid": txid,
        "txFrom": txFrom,
        "txTo": txTo,
        "txAmount": txAmount,
        "currency": currency,
        "message": "POST transaction completed"
      });
    }else{
      return res.json({
        "status": 400,
        "message": "Error with POST body"
      });
    }
  }catch(err) {
    return res.json({
      "status": 400,
      "message": "Error with POST request"
    });
  }
// //
// //   if(signature){
// //     console.log("data", data);
// //
//     let apiKeyHash = await tx.generateApiKeyHash(apiKey);
//
//     console.log("apiKeyHash", apiKeyHash);
//
//     let result = await tx.updatePermission(apiKeyHash, permissionType, permissionData);
//
//     return res.json({
//       "status": 200,
//       "message": "permission updated"
//     });
// //   }else{
// //     return res.json({
// //       "status": 400,
// //       "message": "no signature found"
// //     });
// //   }
});

module.exports = router
// export default app;
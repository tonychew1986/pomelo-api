
const app = require('../index.ts');
// const routes = require('../src/index.ts');
import {agent as request} from 'supertest';

import {expect} from 'chai';
describe("Index Test", () => {

  it('should GET /transactions', async function () {
      const res = await request(app).get('/transactions');
      // expect(res.status).to.equal(200);
      expect(res.body.data.count).to.equal(5);
      expect(res.body.data.info[0].epoch).to.equal(1614753503);
      expect(res.body.data.info[0].txid).to.equal(1048);
      expect(res.body.data.info[0].txFrom).to.equal(10961);
      expect(res.body.data.info[0].txTo).to.equal(2861);
      expect(res.body).not.to.be.empty;
      expect(res.body.data).not.to.be.empty;
  });
  
  it('should POST /transaction, misspelled endpoint', function (done) {
    request(app)
      .post('/transaction')
      .send({
        "epoch": 1,
        "txid": 2,
        "txFrom": 3,
        // "txTo": 4,
        "txAmount": 5,
        "currency": 6,
      })
      .expect(404)
      .end((err, res) => {
         if (err) {
           return done(err);
         }
    
         
         return done();
      });
  });
  
  it('should POST /transactions fail', function (done) {
    request(app)
      .post('/transactions')
      .send({
        "epoch": 1,
        "txid": 2,
        "txFrom": 3,
        // "txTo": 4,
        "txAmount": 5,
        "currency": 6,
      })
      .expect(200)
      .end((err, res) => {
         if (err) {
           return done(err);
         }
         
         expect(res.body.message).to.equal('Error with POST body')
         expect(res.body.status).to.equal(400)
         
         return done();
      });
  });
  
  it('should POST /transactions success', function (done) {
    request(app)
      .post('/transactions')
      .send({
        "epoch": 1,
        "txid": 2,
        "txFrom": 3,
        "txTo": 4,
        "txAmount": 5,
        "currency": 6,
      })
      .expect(200)
      .end((err, res) => {
         if (err) {
           return done(err);
         }
         // var resBody = res["body"];
         // console.log("resBody", resBody);
         return done();
      });
  });
  
});
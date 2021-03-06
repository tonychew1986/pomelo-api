
const routes = require('../src/index.ts');
import {agent as request} from 'supertest';

import {expect} from 'chai';
describe("Index Test", () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
    
  //   it('should POST /transactions success', async function () {
  //     const res = await request(routes)
  //         .post('/transactions').send({todo: "first todo"});
  //     expect(res.status).to.equal(200);
  //     // expect(res.body).not.to.be.empty;
  //     // expect(res.body.data).not.to.be.empty;
  //     // expect(res.body.data).to.be.an("object");
  //     // expect(res.body.error).to.be.empty;
  // });
  // 
  // it('should POST /transactions fail', async function () {
  //   const res = await request(routes)
  //       .post('/transactions').send({todo: "first todo"});
  //   expect(res.status).to.equal(200);
  //   // expect(res.body).not.to.be.empty;
  //   // expect(res.body.data).not.to.be.empty;
  //   // expect(res.body.data).to.be.an("object");
  //   // expect(res.body.error).to.be.empty;
  // });
  
  it('should GET /transactions', async function () {
      const res = await request(routes).get('/transactions');
      // expect(res.status).to.equal(200);
      expect(res.body.data.count).to.equal(5);
      // expect(res.body).not.to.be.empty;
      // expect(res.body.data).not.to.be.empty;
      // expect(res.body.data).to.be.an("array");
      // expect(res.body.error).to.be.empty;
  });
});
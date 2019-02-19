const config = require('../../config');
const server = require('../../server');

process.env.NODE_ENV = config.test_env;
process.env.PORT = config.test_port;

const chai = require('chai');
const chaiHttp = require('chai-http');
const url = '/api/v1/agency';

const should = chai.should();

chai.use(chaiHttp);

describe('Agencies V1', () => {
    it('should GET agencies limit 100', (done) => {
        chai.request(server)
            .get(url)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(100);
                done();
            });
    });

    it('should GET agencies with limit of 5', (done) => {
        chai.request(server)
            .get(`${url}?limit=5`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(5);
                done();
            });
    });

    it('should GET agencies with taxonomy ID of 10', (done) => {
        chai.request(server)
            .get(`${url}?taxonomyId=10`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.forEach(agency => {
                    agency.TAXON_ID.should.eq('10');
                });
                done();
            });
    });

    it('should GET agency with ID of 27600', (done) => {
        chai.request(server)
            .get(`${url}/27600`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body[0].AGENCY_ID.should.eq('27600');
                done();
            });
    });
});
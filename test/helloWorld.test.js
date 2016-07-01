"use strict";
const index_1 = require("../index");
const Chai = require('chai');
const expect = Chai.expect;
describe('hello world', function () {
    it('shold equal "hello World"', function () {
        expect(index_1.helloWorld).to.eq("hello");
    });
});

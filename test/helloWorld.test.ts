"use strict";
import {helloWorld} from "../index";
import * as Chai from 'chai';
const expect = Chai.expect;
describe('hello world', function(){
    it('shold equal "hello World"', function(){
        expect(helloWorld).to.eq("hello");
    })
});
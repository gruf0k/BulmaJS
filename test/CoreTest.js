const expect = require('chai').expect;

import Bulma from '../src/core.js';

describe('BulmaJS Core', () => {
    it('create should error when trying to create an unregistered plugin', () => {
        expect(Bulma.create.bind(Bulma, "unregistered-plugin", {})).to.throw();
    });

    it('createElement should return a div when the name of the element is div', () => {
        var myElem = Bulma.createElement('div');
        expect(myElem.nodeName).to.equal('DIV');
    });

    it('createElement should return a div with a class of foo when the name of the element is div and the classes array contains foo', () => {
        var myElem = Bulma.createElement('div', ['foo']);
        expect(myElem.nodeName).to.equal('DIV');
        expect(myElem.classList.contains('foo')).to.be.true;
    });
});
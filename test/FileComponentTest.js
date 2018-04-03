const expect = require('chai').expect;

import Bulma from '../src/core';
import File from '../src/plugins/file';

describe('BulmaJS File Plugin', () => {
    it('should be registered', () => {
        expect(Bulma.hasOwnProperty('file')).to.be.true;
    });

    it('should register a change event', () => {
        var file = makeFileHTMLWithFileName();

        let events = document.createEvent('HTMLEvents');
        events.initEvent("DOMContentLoaded", false, false);
        document.dispatchEvent("DOMContentLoaded");
    });
});

function makeFileHTMLWithFileName() {
    let wrapper = Bulma.createElement('div', ['file', 'has-name']);
    let label = Bulma.createElement('label', ['file-label']);

    let input = Bulma.createElement('input', ['file-input']);
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'resume');

    let button = Bulma.createElement('span', ['file-cta']);
    let buttonIcon = Bulma.createElement('span', ['file-icon']);
    buttonIcon.appendChild(Bulma.createElement('i', ['fas', 'fa-upload']));

    let buttonLabel = Bulma.createElement('span', ['file-label']);
    buttonLabel.innerHTML = 'Choose a file?';

    button.appendChild(buttonIcon)
    button.appendChild(buttonLabel);

    let fileName = Bulma.createElement('span', ['file-name'])
    fileName.innerHTML = 'No file chosen';

    label.appendChild(input)
    label.appendChild(button)
    label.appendChild(fileName);
    
    wrapper.appendChild(label);
    
    return wrapper;
}
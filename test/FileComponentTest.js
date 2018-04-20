describe('BulmaJS File Plugin', function() {
    it('should be registered', function() {
        expect(Bulma.hasOwnProperty('file')).to.be.true;
    });
});

function makeFileHTMLWithFileName() {
    var wrapper = Bulma.createElement('div', ['file', 'has-name']);
    var label = Bulma.createElement('label', ['file-label']);

    var input = Bulma.createElement('input', ['file-input']);
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'resume');

    var button = Bulma.createElement('span', ['file-cta']);
    var buttonIcon = Bulma.createElement('span', ['file-icon']);
    buttonIcon.appendChild(Bulma.createElement('i', ['fas', 'fa-upload']));

    var buttonLabel = Bulma.createElement('span', ['file-label']);
    buttonLabel.innerHTML = 'Choose a file?';

    button.appendChild(buttonIcon)
    button.appendChild(buttonLabel);

    var fileName = Bulma.createElement('span', ['file-name'])
    fileName.innerHTML = 'No file chosen';

    label.appendChild(input)
    label.appendChild(button)
    label.appendChild(fileName);
    
    wrapper.appendChild(label);
    
    return wrapper;
}
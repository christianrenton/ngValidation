describe('Zipcode validation', function () {
	it('should allow standard 5-dgit US zipcode format', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.zipcode'));

		elem.sendKeys('12345');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should allow standard 5 hyphen 4-dgit US zipcode format', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.zipcode'));

		elem.sendKeys('12345-6789');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should set invalid when not zipcode format', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.zipcode'));

		elem.sendKeys('123456');

		expect(elem.getAttribute('class')).toMatch('invalid');
		elem.clear();

		elem.sendKeys('12a45');

		expect(elem.getAttribute('class')).toMatch('invalid');
		elem.clear();

		elem.sendKeys('12a45-6789');

		expect(elem.getAttribute('class')).toMatch('invalid');
		elem.clear();

	});
});
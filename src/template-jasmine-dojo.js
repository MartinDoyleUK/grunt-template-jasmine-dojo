var template = __dirname + '/templates/jasmine-dojo.html',
	_ = require('lodash');

exports.process = function(grunt, task, context) {
	var source = grunt.file.read(template);
	return _.template(source, context);
};

var template = __dirname + '/templates/jasmine-dojo.html',
	_ = require('lodash');

exports.process = function(grunt, task, context) {
	var source = grunt.file.read(template);
	var t = _.template(source);
	return t(context);
};

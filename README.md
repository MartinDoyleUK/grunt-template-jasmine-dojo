Dojo template for Jasmine unit tests
===========================

Grunt Jasmine template for Dojo Toolkit, inspired and informed by grunt-template-jasmine-requirejs. Contributors welcome!

## Installation
```
npm install grunt-template-jasmine-dojo --save-dev
```

## Template Options

### templateOptions.dojoConfig
Type: `Object`

This object is `JSON.stringify()`-ed into the template and passed into `dojoConfig` variable.

### templateOptions.dojoFile
Type `String`

The path to the dojo library on the system, in order to bootstrap Dojo.

## Sample usage

```js
grunt.initConfig({
	connect: {
		test: {
			options: {
				base: './',
				port: 8001
			}
		}
	},
	jasmine: {
		test: {
			options: {
				host: 'http://localhost:8001/',
				specs: 'test/**/*.spec.js',
				template: require('grunt-template-jasmine-dojo'),
				templateOptions: {
					dojoConfig: {
						async: true,
						baseUrl: 'staging/',
						packages: [{
							name: 'dojo',
							location: 'lib/dojo'
						}, {
							name: 'dojox',
							location: 'lib/dojox'
						}, {
							name: 'dijit',
							location: 'lib/dijit'
						}, {
							name: 'app',
							location: 'script'
						}]
					},
					dojoFile: 'bower_components/dojo/dojo.js'
				}
			}
		}
	}
});

grunt.registerTask('test', [
	'connect:test',
	'jasmine:test'
]);
```

*Note* the usage of the 'connect' task configuration. You will need to use a task like
[grunt-contrib-connect][] if you need to test your tasks on a running server.

[grunt-contrib-connect]: https://github.com/gruntjs/grunt-contrib-connect

### Authors / Maintainers

- Martin Doyle (@MartinDoyleUK)

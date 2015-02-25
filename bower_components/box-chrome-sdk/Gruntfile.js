module.exports = function(grunt) {
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n//----------------------------\n'
            },
            dist: {
                src: ['build/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <% pkg.name %> <% grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
                    'dist/<%= pkg.name %>.bower_components.min.js': 'dist/<%= pkg.name %>.bower_components.js'
                }
            }
        },
        eslint: {
            test: {
                src: ['test/**/*.js'],
                options: {
                    config: 'test/eslint.json'
                }
            },
            src: {
                src: ['lib/**/*.js', 'src/**/*.js'],
                options: {
                    config: 'eslint.json'
                }
            }
        },
        bower_concat: {
            all: {
                mainFiles: {
                    'Rx': 'dist/rx.all.js'
                },
                dest: 'dist/<%= pkg.name %>.bower_components.js',
                exclude: ['angular-mocks']
            },
            test: {
                mainFiles: {
                    'Rx': 'dist/rx.all.js'
                },
                dest: 'build/dist/<%= pkg.name %>.bower_components.js'
            }
        },
        wrap: {
            basic: {
                src: ['src/**/*.js', 'lib/*.js'],
                dest: 'build/',
                options: {
                    wrapper: ['(function() {', '})();'],
                    indent: '    '
                }
            }
        },
        clean: ['dist/*', 'build/*', 'doc/*'],
        mkdir: {
            all: {
                options: {
                    create: ['build']
                }
            }
        },
        jsdox: {
            generate: {
                options: {
                    contentsTitle: 'Box Chrome App SDK Documentation',
                    pathFilter: /^(src)|(lib)/
                },
                src: ['src/**/*.js', 'lib/**/*.js'],
                dest: 'doc'
            }
        },
        karma: {
            options: {
                frameworks: ['mocha', 'sinon-chai'],
                reporters: ['progress', 'coverage'],
                preprocessors: {'lib/**/*.js': ['coverage'], 'src/**/*.js': ['coverage']},
                browsers: ['Chrome'],
                singleRun: true,
                customLaunchers: {
                    Chrome_travis_ci_sl: {
                        base: 'SauceLabs',
                        browserName: 'chrome',
                        version: '37'
                    }
                }
            },
            unit: {
                options: {
                    files: ['build/dist/<%= pkg.name %>.bower_components.js', 'lib/**/*.js', 'src/**/*.js', 'test/*.js', 'test/unit/**/*.js'],
                    coverageReporter: {type: 'text'}
                },
                sauceLabs: {
                    testName: 'Chrome App SDK Unit Tests',
                    connectOptions: {
                        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
                    }
                }
            },
            integration: {
                options: {
                    files: ['dist/<%= pkg.name %>.bower_components.js', 'lib/**/*.js', 'src/**/*.js', 'test/*.js', 'test/integration/**/*.js'],
                    coverageReporter: {type: 'text-summary'}
                },
                sauceLabs: {
                    testName: 'Chrome App SDK Integration Tests',
                    connectOptions: {
                        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
                    }
                }
            }
        }
    };
    if (process.env.TRAVIS){
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
          console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
          process.exit(1);
        }
        config.karma.options.browsers = ['Chrome_travis_ci_sl'];
        config.karma.options.reporters.push('saucelabs');
    }
    grunt.initConfig(config);

    [
        'grunt-contrib-uglify',
        'grunt-contrib-watch',
        'grunt-contrib-concat',
        'grunt-bower-concat',
        'grunt-eslint',
        'grunt-wrap',
        'grunt-contrib-clean',
        'grunt-jsdox',
        'grunt-karma',
        'grunt-mkdir'
    ].forEach(function(gruntPackage) {
            grunt.loadNpmTasks(gruntPackage);
        });

    grunt.registerTask('default', ['clean', 'mkdir', 'eslint', 'wrap', 'concat', 'bower_concat:all', 'uglify', 'jsdox']);
    grunt.registerTask('test', ['bower_concat:test', 'karma']);
};

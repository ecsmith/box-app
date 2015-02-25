module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            src: ['scripts/**/*.js'],
            options: {
                config: 'eslint.json'
            }
        },
        bower_concat: {
            all: {
                mainFiles: {
                    'Rx': 'dist/rx.all.js',
                    'angular-bootstrap': 'ui-bootstrap-tpls.js'
                },
                dest: 'build/<%= pkg.name %>.bower_components.js',
                exclude: ['bootstrap-css-only']
            }
        },
        concat: {
            dist: {
                src: ['<%= bower_concat.all.dest %>'],
                dest: 'build/<%= pkg.name %>.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['eslint', 'bower_concat', 'concat']);
};

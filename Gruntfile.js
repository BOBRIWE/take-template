module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
			dev: {
				files: {
					'dist/stylesheets/main.css': 'src/stylesheets/sass/main.sass'
				}
			}
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.html'],
                    dest: 'dist/'
                }]
            },
			img: {
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: ['**'],
					dest: 'dist/images/'
				}]
			},
			fa: {
				files: [{
					expand: true,
                    cwd: 'src/stylesheets/font-awesome-4.7.0/fonts/',
                    src: ['**'],
                    dest: 'dist/fonts/'
				}]
			}
        },
		// grunt-sass style: 'compressed' not working
		cssmin: {
			options: {
				sourceMap: true
			},
			target: {
				files: {
					'dist/stylesheets/main.min.css': 'dist/stylesheets/main.css'
				}
			}
		},
        watch: {
            all: {
                files: ['src/**'],
                tasks: ['dev']
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['']);
    grunt.registerTask('dev', [
		'sass:dev',
        'newer:copy:html',
		'newer:copy:img',
		'newer:copy:fa',
		'newer:cssmin'
    ]);
};

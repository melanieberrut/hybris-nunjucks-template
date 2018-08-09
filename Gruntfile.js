module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
        nunjucks: {
            files: ['web/webroot/WEB-INF/_ui-src/responsive/templates/**/*.html'],
            tasks: ['clean','nunjucks']
        }
    },

    connect: {
        server: {
            options: {
                port: 9000,
                base: 'web/webroot/_ui/responsive/templates/'
            }
        }
    },

    clean: {
        default: ['web/webroot/_ui/responsive/templates/']
    },

    nunjucks: {
        options: {
            data: grunt.file.readJSON('web/webroot/WEB-INF/_ui-src/responsive/templates/data/data.json'),
            paths: 'web/webroot/WEB-INF/_ui-src/responsive/templates/'
        },
        render: {
            files: [
                {
                    expand: true,
                    cwd: 'web/webroot/WEB-INF/_ui-src/responsive/templates/pages/',
                    src: '*.html',
                    dest: 'web/webroot/_ui/responsive/templates/',
                    ext: '.html'
                }
            ]
        }
    }

});

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-nunjucks-2-html');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Templating task
    grunt.registerTask('template', ['connect', 'nunjucks', 'watch']);
};

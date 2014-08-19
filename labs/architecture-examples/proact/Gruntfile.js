module.exports = function(grunt) {
  'use strict'

  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.initConfig({
    browserSync: {
      bsFiles: {
          src : ['index.html', 'css/*.css', 'js/*.js']
      },
      options: {
          server: {
              baseDir: "./"
          },
          injectChanges: false
      }
    }
  });
};


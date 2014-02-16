module.exports = function(grunt) {
 
  // configure the tasks
  grunt.initConfig({
"jsbeautifier" : {
    files : ["src/*.js"],
    options : {
    }
},
 jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true
      },
    },
    with_overrides: {
      options: {
        curly: false,
        undef: true,
      },
      files: {
        src: ['src/*.js']
      },
    }
  },
   uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'build/jquery.seo.min.js': ['src/jquery.seo.js']
      }
    }
  }
  });
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    
grunt.registerTask('default', ['uglify','jsbeautifier','jshint']);
  // define the tasks
};
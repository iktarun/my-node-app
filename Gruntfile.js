module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};




// module.exports = function(grunt){
//
// grunt.registerTask('speak', function(){
//   console.log("Iam Speaking");
// });
//
// grunt.registerTask('yell', function(){
//   console.log("Iam Yelling");
// });
//
// grunt.registerTask('both',['speak','yell']);
//
// grunt.registerTask('default',['speak','yell']);
//
// // Project configuration.
// grunt.initConfig({
//     concat: {
//       options: {
//         separator: '',
//       },
//       js: {
//         src: ['js/1.js', 'js/2.js'],
//         dest: 'build/js/scripts.js',
//       },
//       css: {
//         src: ['css/main.css', 'css/theme.css'],
//         dest: 'build/css/styles.css',
//       },
//     },
//
//     watch: {
//       js: {
//         files: ['js/**/*.js'],
//         tasks: ['concat:js'],
//       },
//
//       css: {
//         files: ['css/**/*.css'],
//         tasks: ['concat:css'],
//       },
//     },
//
//     uglify: {
//       js: {
//         files: {
//           'build/js/scripts.min.js': ['js/1.js', 'js/2.js']
//         }
//       }
//     },
//
//     cssmin: {
//       options: {
//         mergeIntoShorthands: false,
//         roundingPrecision: -1
//       },
//       css: {
//         files: {
//           'build/css/styles.min.css': ['css/theme.css', 'css/main.css']
//         }
//       }
//     }
//
// });
//
// grunt.loadNpmTasks('grunt-contrib-concat');
// grunt.loadNpmTasks('grunt-contrib-watch');
// grunt.loadNpmTasks('grunt-contrib-uglify');
// grunt.loadNpmTasks('grunt-contrib-cssmin');
// grunt.registerTask('default',['concat','watch']);

// }

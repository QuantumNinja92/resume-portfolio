module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },{
            name: 'medium',
            width: '50%',
            suffix: '_medium',
            quality: 40
          },{
            name: 'large',
            width: '80%',
            suffix: '_large',
            quality: 70
          },{
            name: 'slarge',
            width: '100%',
            suffix: '_slarge',
            quality: 90
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'raw/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};

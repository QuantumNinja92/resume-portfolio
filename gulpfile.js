var gulp = require('gulp');

gulp.task('default', function(){
  console.log('Hello From Gulp');
});


var responsive = require('gulp-responsive');

gulp.task('images', function () {
  return gulp.src('raw/*.jpg')
    .pipe(responsive([{
      name: '*.jpg',
      width: 200
    },{
      name: '*.jpg',
      width: 200 * 2,
      rename: '*@2x.jpg'
    },{
      name: 'background-*.jpg',
      width: 700
    },{
      name: '*.jpg',
      width: '50%'
    }]))
    .pipe(gulp.dest('images'));
});

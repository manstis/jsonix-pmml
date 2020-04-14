var gulp = require('gulp');
var del = require('del');

gulp.task('clean:output',
  function () {
    return del([
      'dist/',
      'src/generated/',
      'cache'
    ]);
  });

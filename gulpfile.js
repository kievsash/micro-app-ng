var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src([
      './dist/inline.bundle.js',
      './dist/polyfills.bundle.js',
      './dist/styles.bundle.js',
      './dist/main.bundle.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

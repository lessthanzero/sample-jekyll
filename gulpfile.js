var gulp = require('gulp');
var util = require('util');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('jekyll-build', shell.task(['jekyll build --watch --drafts']));

gulp.task('jekyll-serve', function() {
  browserSync.init({ server: { baseDir: '_site/' }, port: 4000 });
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['jekyll-build', 'jekyll-serve']);

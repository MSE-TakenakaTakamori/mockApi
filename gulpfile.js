const gulp = require('gulp');
const aglio = require('gulp-aglio');
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
const rimraf = require('rimraf');
const ejs = require('gulp-ejs');

const reload = browserSync.reload;
const TEMPLATE_FILES = ['apidocs/**/*.md'];
const LAYOUT_FILE = 'apidocs/layout.md';
const PUBLISHED_DIR = 'published';

gulp.task('combine', function(){
  return gulp.src(LAYOUT_FILE)
    .pipe(ejs({},{ ext: '.md' }))
    .pipe(rename('index.md'))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('generate-api-docs', ['combine'], function() {
  return gulp.src(PUBLISHED_DIR + '/index.md')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('watch', function () {
  gulp.watch(TEMPLATE_FILES, ['generate-api-docs', reload]);
});

gulp.task('browserSync', function() {
  browserSync({
    logConnections: true,
    logFileChanges: true,
    notify: true,
    port: 8088,
    open: false,
    server: {
      baseDir: PUBLISHED_DIR
    }
  });
});

gulp.task('clean', function(cb) {
  rimraf(PUBLISHED_DIR, cb);
});

gulp.task('publish', ['clean', 'generate-api-docs']);
gulp.task('default', ['generate-api-docs', 'watch', 'browserSync']);

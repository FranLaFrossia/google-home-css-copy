const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
// const concat = require('gulp-concat');

gulp.task('styles', () => {
  return gulp.src('sass/**/styles.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
  gulp.watch('sass/**/*.scss', (done) => {
      gulp.series(['clean', 'styles'])(done);
  });
});
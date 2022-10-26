const exec = require('child_process').exec;
const gulp = require('gulp');

gulp.task('protect', (cb) => {
  exec('snyk-protect', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('test', (cb) => {
  exec('snyk test', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('prepare', gulp.series('protect'));

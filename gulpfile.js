const packageName = 'emptymodule';

var path = require('path');
var gulp = require('gulp');
var del = require('del');
var merge = require('merge2');
var ts = require('gulp-typescript');
var dts = require('dts-bundle');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
    var tsTestProject = ts.createProject('./test/tsconfig.json');
    return gulp.src('./test/**/*.ts', {base: '.'})
    .pipe(ts(tsTestProject))
    .pipe(gulp.dest('.'))
    .pipe(mocha({
        reporter: 'progress'
    }));
})

gulp.task('clean', function () {
    return del([
        'lib/',
        './index.js',
        './index.d.ts',
        packageName + '.d.ts'
    ]);

});

gulp.task('definition-bundle', function () {
    dts.bundle({
        name: packageName,
        main: 'index.d.ts',
        exclude: /.*typings.*/,
        verbose: false
    });
});

gulp.task('ts', ['clean'], function () {
    var tsProject = ts.createProject(path.resolve('./src/tsconfig.json'));
    var tsResult = gulp.src(path.resolve('./src/**/*.ts')).pipe(ts(tsProject));
    return merge([
        tsResult.dts.pipe(gulp.dest('.')),
        tsResult.js.pipe(gulp.dest(path.resolve('.')))
    ]);
});

gulp.task('build', function (done) {
    runSequence('ts', 'definition-bundle', done);
});

gulp.task('default', ['build']);
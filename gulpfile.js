var gulp=require('gulp');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var clean=require('gulp-clean-css');
var autoprefixer=require('gulp-autoprefixer');
var server=require("gulp-webserver");

gulp.task('devSass',function(){
    return gulp.src('./public/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers:['last 2 versions']}))
    .pipe(concat('all.css'))
    .pipe(clean())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch',function(){
    return gulp.watch('./public/styles/*.scss',gulp.series('devSass'))
})

gulp.task('server',function(){
    return gulp.src('public')
    .pipe(server({
        port:9090,
        open:true,
        livereload:true
    }))
})

gulp.task('public',gulp.series('devSass','server','watch'));
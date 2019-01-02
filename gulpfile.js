var gulp=require('gulp');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var clean=require('gulp-clean-css');
var autoprefixer=require('gulp-autoprefixer');
var server=require("gulp-webserver");
var htmlmin=require('gulp-htmlmin');
var uglify=require('gulp-uglify');
var babel=require('gulp-babel');

gulp.task('scss',function(){
    return gulp.src('./public/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers:['last 2 versions']}))
    .pipe(concat('all.css'))
    .pipe(clean())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch',function(){
    gulp.watch('./public/styles/*.scss',gulp.series('scss'))
    gulp.watch('./public/scripts/**/*.js',gulp.series('js'))
})

gulp.task('server',function(){
    return gulp.src('public')
    .pipe(server({
        port:9090,
        open:true,
        livereload:true
    }))
})

gulp.task('default',gulp.series('scss','server','watch'));

gulp.task('js',function(){
    return gulp.src('./public/scripts/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./list/scripts'))
})

gulp.task('css',function(){
    return gulp.src('./public/css/*.css')
    .pipe(gulp.dest('./list/style'))
})

gulp.task('fonts',function(){
    return gulp.src('./public/fonts/*.{log,html,css,eot,js,svg,ttf,woff}')
    .pipe(gulp.dest('./list/fonts'))
})

gulp.task('images',function(){
    return gulp.src('./public/images/*.{jpg,png}')
    .pipe(gulp.dest('./list/images'))
})

gulp.task('webserver',function(){
    return gulp.src('list')
    .pipe(server({
        port:9090,
        open:true,
        livereload:true
    }))
})

gulp.task('html',function(){
    return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./list'));
})

gulp.task('build',gulp.series('js','css','fonts','images','html'))
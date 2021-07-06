var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('dashfox/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('dashfox/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('default', function(){
   return gulp.src('dashfox/assets/css/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dashfox/assets/css'));
		
});


//_______task for skinmodes
gulp.task('skin', function(){
	return gulp.src('dashfox/assets/css/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('dashfox/assets/css'));
		 
 });
 
 //_______task for skinmodes
gulp.task('color', function(){
	return gulp.src('dashfox/assets/css/colors/**/*.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('dashfox/assets/css/colors'));
		 
 });
 
 //_______task for skinmodes
gulp.task('sidemenu', function(){
	return gulp.src('dashfox/assets/css/sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('dashfox/assets/css'));
		 
 });


//_______ task for scss folder to css main style 
gulp.task('watch-rtl', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('dashfox/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('dashfox/assets/css-rtl'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('default-rtl', function(){
   return gulp.src('dashfox/assets/css-rtl/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dashfox/assets/css-rtl'));
		
});


//_______task for skinmodes
gulp.task('skin-rtl', function(){
	return gulp.src('dashfox/assets/css-rtl/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('dashfox/assets/css-rtl'));
		 
 });
 
 //_______task for skinmodes
gulp.task('color-rtl', function(){
	return gulp.src('dashfox/assets/css-rtl/colors/**/*.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('dashfox/assets/css-rtl/colors'));
		 
 });
 
 //_______task for skinmodes
gulp.task('sidemenu-rtl', function(){
	return gulp.src('dashfox/assets/css-rtl/sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('dashfox/assets/css-rtl'));
		 
 });




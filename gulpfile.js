var gulp = require('gulp');
var run = require('gulp-run');

// Validate resume.json
gulp.task('validate', function(){
    return run('resume test').exec();
})

gulp.task('serve', function(){
    return run('resume serve --port 7777 --theme elegant').exec();
})

gulp.task('generate-html', function() {
    return run('resume export my-resume.html --format html --theme elegant').exec();
})

gulp.task('generate-pdf', function() {
    return run('resume export my-resume.pdf --format pdf --theme elegant').exec();
})

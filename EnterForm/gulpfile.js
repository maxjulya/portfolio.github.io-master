var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn");

//запускаем локальный сервер
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8888
    });
        opn('http://localhost:8888');
});

//работа с html
gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

//работа с css
gulp.task('css', function () {
    gulp.src('./app/css/*.css')
        .pipe(connect.reload());
});

//работа с js
gulp.task('js', function () {
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());
});

//Слежка
gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/js/*.js'], ['js']);
    gulp.watch(['./app/css/*.css'], ['css']);
});

//задача по умолчанию
gulp.task('default', ['connect', 'watch']);
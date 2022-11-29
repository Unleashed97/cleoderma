'use strict'

import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import sync from 'browser-sync'
import htmlmin from 'gulp-htmlmin'
import { deleteAsync } from 'del'
import rename from 'gulp-rename'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import fileInclude from 'gulp-file-include'
import plumber from 'gulp-plumber'
import webpack from 'webpack-stream'
import newer from 'gulp-newer'
import imagemin from 'gulp-imagemin'
import webp from 'gulp-webp'
import ifPlugin from 'gulp-if'
import notify from 'gulp-notify'
import replace from 'gulp-replace'

const srcFolder = 'src'
const distFolder = 'dist'

const isBuild = process.argv.includes('--build')
const isDev = !process.argv.includes('--build')

const path = {
    dist: {
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        js: `${distFolder}/js/`,
        img: `${distFolder}/img/`,
        video: `${distFolder}/video/`,
        fonts: `${distFolder}/fonts/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        css: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        video: `${srcFolder}/video/**/*`,
        fonts: `${srcFolder}/fonts/**/*.{ttf,otf,eot,svg,woff,woff2}`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        css: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        video: `${srcFolder}/video/**/*`,
        fonts: `${srcFolder}/fonts/**/*.{ttf,otf,eot,svg,woff,woff2}`,
    },
    clean: `./${distFolder}/`,
}

export const html = () => {
    return gulp
        .src(path.src.html)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    notify.onError({
                        title: 'HTML Error',
                        message: 'Error: <%= error.message %>',
                    })(err)
                    this.emit('end')
                },
            }),
        )
        .pipe(fileInclude())
        .pipe(
            ifPlugin(
                isBuild,
                htmlmin({
                    removeComments: true,
                    collapseWhitespace: true,
                }),
            ),
        )
        .pipe(gulp.dest(path.dist.html))
        .pipe(sync.stream())
}

export const styles = () => {
    return gulp
        .src(path.src.css)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    notify.onError({
                        title: 'SCSS Error',
                        message: 'Error: <%= error.message %>',
                    })(err)
                    this.emit('end')
                },
            }),
        )
        .pipe(sass())
        .pipe(replace('../../', '../'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest(path.dist.css))
        .pipe(sync.stream())
}

export const scripts = () => {
    return gulp
        .src(path.src.js)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    notify.onError({
                        title: 'JS Error',
                        message: 'Error: <%= error.message %>',
                    })(err)
                    this.emit('end')
                },
            }),
        )
        .pipe(
            webpack({
                mode: isBuild ? 'production' : 'development',
                output: {
                    filename: 'script.min.js',
                },
            }),
        )
        .pipe(gulp.dest(path.dist.js))
        .pipe(sync.stream())
}

export const images = () => {
    return gulp
        .src(path.src.img)
        .pipe(
            plumber({
                errorHandler: function (err) {
                    notify.onError({
                        title: 'Images',
                        message: 'Error: <%= error.message %>',
                    })(err)
                    this.emit('end')
                },
            }),
        )
        .pipe(newer(path.dist.img))
        .pipe(webp())
        .pipe(gulp.dest(path.dist.img))
        .pipe(gulp.src(path.src.img))
        .pipe(newer(path.dist.img))
        .pipe(
            ifPlugin(
                isBuild,
                imagemin({
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 5,
                }),
            ),
        )
        .pipe(gulp.dest(path.dist.img))
        .pipe(sync.stream())
}

export const fonts = () => {
    return gulp
        .src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts))
        .pipe(sync.stream())
}

export const video = () => {
    return gulp
        .src(path.src.video)
        .pipe(gulp.dest(path.dist.video))
        .pipe(sync.stream())
}

export const browserSync = () => {
    sync.init({
        server: { baseDir: `./${distFolder}/` },
        notify: false,
    })
}

export const clean = async () => {
    return await deleteAsync(path.clean, { force: true })
}

export const watcher = () => {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.css, styles)
    gulp.watch(path.watch.js, scripts)
    gulp.watch(path.watch.img, images)
    gulp.watch(path.src.fonts, fonts)
    gulp.watch(path.src.video, video)
}

const mainTasks = gulp.series(
    fonts,
    video,
    gulp.parallel(html, styles, scripts, images),
)
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, browserSync))
const build = gulp.series(clean, mainTasks)

export { dev }
export { build }

export default dev

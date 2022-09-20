import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const srcFolder = './src'
const buildFolder = './dist'

export const path = {
    build: {
        html: `${buildFolder}/`,
        styles: `${buildFolder}/`,
        scripts: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/images/`,

    },
    src: {
        html: `${srcFolder}/pages/index/*.html`,
        styles: `${srcFolder}/pages/index/*.scss`,
        scripts: `${srcFolder}/pages/index/*.js`,
        fonts: `${srcFolder}/fonts/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}`,
        images: `${srcFolder}/img/*.{png,jpg,jpeg,gif,svg}`,
    },
    watch: {
        html: `${srcFolder}/pages/**/*.html`,
        styles: `${srcFolder}/pages/**/*.scss`,
        scripts: `${srcFolder}/pages/**/*.js`,
        fonts: `${srcFolder}/fonts/**/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}`,
        images: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    },
    clear: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
}
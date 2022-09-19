
const isProd = process.argv.includes('--production')
const isDev = !isProd

export const app = {
    isProd: isProd,
    isDev: isDev,


    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: isProd
    }
}
import css from 'css-loader';
const isProd = process.argv.includes('--production')
const isDev = !isProd


export const app = {
    isProd: isProd,
    isDev: isDev,


    webpack: {
        mode: isProd ? "production" : "development",
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
    },
    imagemin: {
        verbose: isProd
    }
}
const path = require("path");

module.exports = {
    mode: "none",
    context: `${__dirname}/src`,
    entry: "./index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-sprite-loader",
                        options: {
                            spriteModule: "./custom-loader.js",
                            symbolId: svgPath => {
                                const split = path.resolve(svgPath)
                                    .split(path.sep);
                                return split.pop();
                            }
                        }
                    }
                ]
            }
        ]
    }
}
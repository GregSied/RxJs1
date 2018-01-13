module.exports={
    entry: "./main",
    output: {
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "test-loader"
            }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js"]
    }
}
module.exports = {
    entry: './index.ts', // Entry point of your application
    mode: 'development',
    output: {
      filename: 'bundle.js', // Output filename for the bundled code
     // path: path.resolve(__dirname, 'dist'), // Output directory for the bundled file
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, // Rule to handle both TypeScript and TSX files
          use: 'ts-loader', // Use ts-loader to compile TypeScript to JavaScript
          exclude: /node_modules/, // Exclude the node_modules folder
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'], // Allow importing files with these extensions
    },
  };
  
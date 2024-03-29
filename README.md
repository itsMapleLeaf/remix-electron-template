# Do not use this!

This template is based on a version of remix-electron with its own compiler forked from Remix due to its lack of extensibility. Remix is moving to Vite, so that fork is no longer needed!

## remix-electron-template

Welcome to your new remix-electron project!

- [remix-electron docs](https://github.com/itsMapleLeaf/remix-electron)
- [Remix docs](https://remix.run/docs)

## Getting Started

1. To install the app's dependencies, run the following command:

   ```sh
   npm install
   ```

1. To start the app in development mode, run the dev script:

   ```sh
   npm run dev
   ```

## Scripts

The following scripts are defined in the `package.json` file:

- `dev`: Starts the app with hot reloading. Uses nodemon to restart the app when main process files change.
- `build`: Builds the app for production. <!-- Uses [Electron Builder](https://www.electron.build/) to create a distributable package. -->
- `start`: Starts the app in production mode. Make sure you ran `build` first.

## Debugging in VSCode

See this guide: https://gist.github.com/kiliman/a9d7c874af03369a1d105a92560d89e9

Choose the `dev` script to debug in dev, and `start` to debug in production.

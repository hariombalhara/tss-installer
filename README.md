# Install Packages with their types

Ever installed a package to later find out that you don't have that package's @typings/ installed ? If yes, this is the solution for that.

## How to Install
Package Name is with-types. Install it using your favorite Package Manager. 
A local installation is not required if you are using `pnpm` or `npm`. As `pnpx` and `npx` allow downloading a package and execute it without installation.
With Yarn 2.0, this is achievable using [`yarn dlx`](https://yarnpkg.com/cli/dlx)

Choose any of the following commands.

`npm install with-types --save-dev`  # Optional Step with npm

`pnpm add with-types --save-dev` # Optional Step with pnpm

`yarn add with-types --dev` # Optional Step with Yarn 2.0 but required for lesser versions

### How to use

- To install a package with it's typings

    ```bash
    npx wt install PACKAGE_NAME -- -D # Supports same flags as npm
    ```
    
    or

    ```bash
    pnpx wt install PACKAGE_NAME -- -D # Supports same flags as pnpm
    ```

    or

    ```bash
    yarn wt install PACKAGE_NAME -- --save-dev # Supports same flags as yarn. It assumes that package is installed locally.
    ```

- To uninstall a package and it's typings

    ```bash
    npx wt uninstall PACKAGE_NAME
    ```

    or

    ```bash
    pnpx wt uninstall PACKAGE_NAME
    ```
    
    or

    ```
    yarn wt uninstall PACKAGE_NAME
    ```
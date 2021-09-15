# Install/Uninstall Packages with their types(@types/*)

Ever installed a package to later find out that you don't have that package's @typings/ installed ? If yes, this is the solution for that.

## How to Install
Package Name is with-types. Install it using your favorite Package Manager. 
A local installation is not required if you are using `pnpm` or `npm`. As `pnpx` and `npx` allow downloading a package and execute it without installation.
With Yarn 2.0, this is achievable using [`yarn dlx`](https://yarnpkg.com/cli/dlx)

Choose any of the following commands.

```bash
# Optional Step with npx
npm install with-types --save-dev

```
```bash
# Optional Step with pnpx
pnpm add with-types --save-dev
```

``` bash
# Optional Step with Yarn 2.0 but required for lesser versions
yarn add with-types --dev
```

## How to use

NOTE: If the package is installed locally, you can use a shorthand `wt` instead of `with-types`. So, `npx with-types` become `npx wt`
- To install a package with it's typings

    ```bash
    npx with-types install PACKAGE_NAME --save-dev # Supports same flags as npm
    ```
    
    or

    ```bash
    pnpx with-types install PACKAGE_NAME --save-dev # Supports same flags as pnpm
    ```

    or

    ```bash
    yarn with-types install PACKAGE_NAME --dev # Supports same flags as yarn. It assumes that package is installed locally.
    ```

- To uninstall a package and it's typings

    ```bash
    npx with-types uninstall PACKAGE_NAME
    ```

    or

    ```bash
    pnpx with-types uninstall PACKAGE_NAME
    ```
    
    or

    ```bash
    yarn with-types uninstall PACKAGE_NAME
    ```
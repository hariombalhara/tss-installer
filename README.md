# Install Packages with their types

Ever installed a package to later find out that you don't have that package's @typings/ installed ? If yes, this is the solution for that.

## How to Install

1. `npm install tss-installer`
2. `Update package.json to add two scripts.`
    ```json
        "scripts": {
            "tss-install": "PACKAGE_MANAGER=npm tss-installer install",
            "tss-uninstall": "PACKAGE_MANAGER=npm tss-installer uninstall",
        }
    ```
*[npm](http://npmjs.org/), [yarn](https://yarnpkg.com/) and [pnpm](https://pnpm.io/) are supported. Default is pnpm because of it's disk space efficiency.*

### How to use

- To install a package with it's typings

    `npm tss-install PACKAGE_NAME`
    
    or

    `pnpm tss-install PACKAGE_NAME`

    or

    `yarn tss-install PACKAGE_NAME`

- To uninstall a package and it's typings

    `npm tss-uninstall PACKAGE_NAME`

    or

    `pnpm tss-uninstall PACKAGE_NAME`
    
    or

    `yarn tss-install PACKAGE_NAME`



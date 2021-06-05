# Install Packages with their types

Ever installed a package to later find out that you don't have that package's @typings/ installed ? If yes, this is the solution for that.

## How to Install

1. `npm install tss-installer`
2. `Update package.json to add two scripts.`
    ```json
        "scripts": {
            "ti": "tss-installer install",
            "tu": "tss-installer uninstall"
        }
    ```

### How to use

- To install a package with it's typings

    ```bash
    npm run ti PACKAGE_NAME -- -D # Supports same flags as npm
    ```
    
    or

    ```bash
    pnpm run ti PACKAGE_NAME -- -D #Supports same flags as pnpm
    ```

    or

    ```bash
    yarn run ti PACKAGE_NAME -- --save-dev # Supports same flags as yarn
    ```

- To uninstall a package and it's typings

    ```bash
    npm run tu PACKAGE_NAME
    ```

    or

    ```bash
    pnpm run tu PACKAGE_NAME
    ```
    
    or

    ```
    yarn run tu PACKAGE_NAME
    ```
## Demo

### Earlier

Installation
![Earlier Installation - Two Steps](./demo/earlier-installation.png)

Uninstallation
![Earlier Uninstallation - Two Steps](./demo/earlier-uninstallation.png)

### Now 

Installation
![Now Installation - Single Step](./demo/now-installation.png)
Uninstallation
![Now Uninstallation - Single Step](./demo/now-uninstallation.png)
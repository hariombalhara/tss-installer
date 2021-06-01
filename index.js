#!/usr/bin/env node
/**
 * TS Supported Installer(tss-installer)
 * Installs a package along with it's types. Never miss a type again!
 */
import { execSync } from 'child_process'
const args = process.argv;
let packageManager;
if (process.env['PACKAGE_MANAGER']) {
    packageManager = process.env['PACKAGE_MANAGER']
} else {
    console.log(`Choosing 'pnpm' as the default Package Manager. You can use a different one using environment variable PACKAGE_MANAGER`)
    packageManager = 'pnpm'
}

const configOfSupportedPackageManagers = [{ name: 'npm', commands: ['install', 'uninstall'], cmdMap:{} }, { name: 'pnpm', commands: ['install', 'uninstall'], cmdMap:{}}, { name: 'yarn', commands: ['install', 'uninstall'], cmdMap: {'install': 'add', 'uninstall': 'remove'} }]
const suppotedPackageManagersNames = configOfSupportedPackageManagers.map((i)=>i.name)
let packageManagerCommand, packageName

let configOfPackageManagerInUse = configOfSupportedPackageManagers.filter((i)=>i.name === packageManager)[0];
if (!configOfPackageManagerInUse) {
    throw new Error(`Unsupported PackageManager "${packageManager}". Only ${suppotedPackageManagersNames} are supported`)
}
else if (args.length >= 4) {
    packageManagerCommand = args[2];
    if (!configOfPackageManagerInUse.commands.some((com)=>{
            return com === packageManagerCommand
        })) {
        throw new Error(`Unsupported command "${packageManagerCommand} for PackageManager ${configOfPackageManagerInUse.name}". Supported commands ${configOfPackageManagerInUse.commands.join()}`)
    }
    packageManagerCommand = configOfPackageManagerInUse.cmdMap[packageManagerCommand] || packageManagerCommand;
    packageName = args[3]
} else {
    throw new Error('Specify arguments like this "pnpm/npm/yarn install/uninstall PACKAGE_NAME"')
}

// Install Package
let command = `${packageManager} ${packageManagerCommand} ${packageName}`
console.log(`Running command '${command}'`)
execSync(`${command}`, {
    stdio: 'inherit'
})

// Install Types of the package
command = `${packageManager} ${packageManagerCommand} @types/${packageName}`
console.log(`\nRunning command '${command}'`)
execSync(`${command}`, {
    stdio: 'inherit'
})
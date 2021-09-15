#!/usr/bin/env node
/**
 * TS Supported Installer(tss-installer)
 * Installs a package along with it's types. Never miss a type again!
 */
import { execSync } from "child_process";
import whichPm from "which-pm-es";
const args = process.argv;
let packageManager;

if (whichPm) {
  packageManager = whichPm;
} else if (process.env.WITH_TYPE_PACKAGE_MANAGER) {
  packageManager = process.env.WITH_TYPE_PACKAGE_MANAGER;
} else {
  // With pnpx whichPm returns null. Handle that.
  console.log(
    `Couldn't identify the Package Manager that run this command. Assuming 'pnpm'. You can use a different one using environment variable WITH_TYPE_PACKAGE_MANAGER`
  );
  packageManager = "pnpm";
}

const configOfSupportedPackageManagers = [
  { name: "npm", commands: ["install", "uninstall"], cmdMap: {} },
  {
    name: "pnpm",
    commands: ["install", "uninstall"],
    cmdMap: { install: "add", uninstall: "remove" },
  },
  {
    name: "yarn",
    commands: ["install", "uninstall"],
    cmdMap: { install: "add", uninstall: "remove" },
  },
];
const supportedPackageManagersNames = configOfSupportedPackageManagers.map(
  (i) => i.name
);
let packageManagerCommand, packageName;

let configOfPackageManagerInUse = configOfSupportedPackageManagers.filter(
  (i) => i.name === packageManager
)[0];
if (!configOfPackageManagerInUse) {
  throw new Error(
    `Unsupported PackageManager "${packageManager}". Only ${supportedPackageManagersNames} are supported`
  );
} else if (args.length >= 4) {
  packageManagerCommand = args[2];
  if (
    !configOfPackageManagerInUse.commands.some((com) => {
      return com === packageManagerCommand;
    })
  ) {
    throw new Error(
      `Unsupported command "${packageManagerCommand} for PackageManager ${
        configOfPackageManagerInUse.name
      }". Supported commands ${configOfPackageManagerInUse.commands.join()}`
    );
  }
  packageManagerCommand =
    configOfPackageManagerInUse.cmdMap[packageManagerCommand] ||
    packageManagerCommand;
  packageName = args[3];
} else {
  console.warn('Usage: "npx with-types install PACKAGE_NAME". See https://github.com/hariombalhara/with-types for details on how to use with other Package Managers');
  process.exit(1);
}

// Install Package
let command = `${packageManager} ${packageManagerCommand} ${packageName} ${args
  .slice(4)
  .join(" ")}`;
console.log(`Running command '${command}'`);
execSync(`${command}`, {
  stdio: "inherit",
});

// Install Types of the package
command = `${packageManager} ${packageManagerCommand} @types/${packageName} ${args
  .slice(4)
  .join(" ")}`;
console.log(`\nRunning command '${command}'`);
execSync(`${command}`, {
  stdio: "inherit",
});

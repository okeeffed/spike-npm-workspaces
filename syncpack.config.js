// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  customTypes: {
    dev: {
      strategy: "versionsByName",
      path: "devDependencies",
    },
    local: {
      strategy: "name~version",
      namePath: "name",
      path: "version",
    },
    overrides: {
      strategy: "versionsByName",
      path: "overrides",
    },
    peer: {
      strategy: "versionsByName",
      path: "peerDependencies",
    },
    pnpmOverrides: {
      strategy: "versionsByName",
      path: "pnpm.overrides",
    },
    prod: {
      strategy: "versionsByName",
      path: "dependencies",
    },
    resolutions: {
      strategy: "versionsByName",
      path: "resolutions",
    },
  },
  dependencyTypes: ["**"],
  filter: ".",
  formatBugs: true,
  formatRepository: true,
  indent: "  ",
  semverGroups: [],
  sortAz: [
    "bin",
    "contributors",
    "dependencies",
    "devDependencies",
    "keywords",
    "peerDependencies",
    "resolutions",
    "scripts",
  ],
  sortExports: [
    "types",
    "node-addons",
    "node",
    "browser",
    "import",
    "require",
    "development",
    "production",
    "default",
  ],
  sortFirst: ["name", "description", "version", "author"],
  sortPackages: true,
  source: ["package.json", "packages/*/package.json"],
  specifierTypes: ["**"],
  versionGroups: [
    {
      dependencies: ["@okeeffed/package-a", "@okeeffed/package-b"],
      isIgnored: true,
    },
  ],
};

module.exports = config;

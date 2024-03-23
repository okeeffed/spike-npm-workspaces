# NPM workspaces spike

## Overview

I am spiking a simple example of an application given the following file tree:

```s
.
├── README.md
├── apps
│   └── app-a
├── package.json
└── packages
    ├── package-a
    └── package-b
```

## SyncPack

[SyncPack](https://jamiemason.github.io/syncpack) was used here to manage package discrepancies between repositories.

## Some challenges

If some pages require to be published to NPM, some workflows need to be added in place in order for this to happen. You would need to effectively manager the version somewhere _other than the version key_ until the time of publish. On top of this, you would need to also potentially keep track of these.

The same goes for the entry point data e.g. modules etc. if you are using TypeScript.

## Appendix A: NPM Workspaces

Converting an existing repository to use npm workspaces and sharing packages within those workspaces is a powerful way to manage a project with multiple packages or services. npm workspaces, introduced in npm v7, allow you to work with multiple packages in a single repository (a monorepo). Here’s how you can convert your repo into using npm workspaces and share packages within them:

### 1. Update npm

First, ensure you're using npm v7 or above since workspaces are a feature from v7 onwards.

```sh
npm install -g npm@latest
```

### 2. Structure Your Project

Decide how you want to structure your workspaces. A common pattern is having a `packages` directory where each subdirectory is a separate package or workspace.

```
my-monorepo/
  packages/
    package-a/
    package-b/
```

### 3. Initialize or Update `package.json`

In the root of your project (e.g., `my-monorepo/`), you either need to initialize a new `package.json` (if one doesn't exist) or update the existing one to define your workspaces.

To initialize:

```sh
npm init -y
```

To define workspaces, add a `workspaces` array in your `package.json`:

```json
{
  "name": "my-monorepo",
  "private": true,
  "workspaces": ["packages/*"]
}
```

The `private: true` is recommended to avoid accidentally publishing your entire monorepo to npm. The `workspaces` field is an array of paths to your workspace directories.

### 4. Initialize Workspaces

Each workspace (e.g., `package-a`, `package-b`) should have its own `package.json`. If they don't already, initialize them:

```sh
cd packages/package-a
npm init -y
# Repeat for other workspaces
```

### 5. Sharing Packages Within the Workspace

To share code between packages within your workspace, you can simply add a package as a dependency of another. For example, to add `package-a` as a dependency of `package-b`, you'd do something like:

1. Ensure `package-a` has a name field in its `package.json`, like `"name": "package-a"`.
2. In `package-b`'s `package.json`, add `package-a` as a dependency:

```json
{
  "dependencies": {
    "package-a": "*"
  }
}
```

The `*` notation tells npm to link this package from within the workspace, rather than downloading it from the npm registry.

### 6. Installing Dependencies and Linking Workspaces

Run `npm install` in the root of your monorepo. npm will install all dependencies for each workspace and also link any workspaces specified as dependencies using the `workspace:` protocol.

### 7. Using the Workspaces

With everything set up, you can now work on your packages within a single repository, share code between them, and manage dependencies in a more streamlined way. npm will ensure that the shared packages are linked correctly, so when you make changes to `package-a`, those changes will be immediately available in `package-b` if `package-b` depends on `package-a`.

Remember, when publishing packages that are part of a workspace, you'll navigate to each package's directory and publish them individually, unless you're using a tool designed to manage publishing in monorepos, like Lerna or changesets, which can automate this process.

That's a basic overview of converting a repo to use npm workspaces and sharing packages within them. Depending on the complexity of your projects, you might need to adjust or expand upon these steps.

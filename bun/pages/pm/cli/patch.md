> Release-pinned source for Bun bun-v1.4.0: [docs/pm/cli/patch.mdx](https://bun.com/docs/pm/cli/patch)

`bun patch` persistently patches packages in `node_modules` in a maintainable, git-friendly way.

Sometimes you need a small change to a package in `node_modules/` to fix a bug or add a feature. `bun patch` lets you do this without vendoring the entire package.

Features:

- Generates `.patch` files that Bun applies to dependencies in `node_modules` on install
- You can commit `.patch` files to your repository and reuse them across installs, projects, and machines
- `"patchedDependencies"` in `package.json` keeps track of patched packages
- Patches packages in `node_modules/` while preserving the integrity of Bun's [Global Cache](https://bun.com/docs/pm/global-cache)
- Test your changes locally before committing them with `bun patch --commit <pkg>`
- To preserve disk space and keep `bun install` fast, Bun commits patched packages to the Global Cache and shares them across projects where possible

#### Step 1. Prepare the package for patching

Use `bun patch <pkg>` to prepare the package for patching:

```bash terminal icon="terminal"
# you can supply the package name
bun patch react

# ...and a precise version in case multiple versions are installed
bun patch react@17.0.2

# or the path to the package
bun patch node_modules/react
```

> **Note**
>
> Always run `bun patch <pkg>` first. It ensures the package folder in `node_modules/` contains a fresh copy of the package with no symlinks or hardlinks to Bun's cache.
>
> If you skip it, you might end up editing the package globally in the cache.

#### Step 2. Test your changes locally

`bun patch <pkg>` makes it safe to edit `<pkg>` in `node_modules/` directly, while preserving the integrity of Bun's [Global Cache](https://bun.com/docs/pm/global-cache). It works by re-creating an unlinked clone of the package in `node_modules/`. `bun patch --commit <pkg>` then diffs that clone against the original package in the Global Cache.

#### Step 3. Commit your changes

Once you're happy with your changes, run `bun patch --commit <path or pkg>`.

Bun generates a patch file in `patches/`, updates your `package.json` and lockfile, and starts using the patched package:

```bash terminal icon="terminal"
# you can supply the path to the patched package
bun patch --commit node_modules/react

# ... or the package name and optionally the version
bun patch --commit react@17.0.2

# choose the directory to store the patch files
bun patch --commit react --patches-dir=mypatches

# `patch-commit` is available for compatibility with pnpm
bun patch-commit react
```

***

# CLI Usage

```bash
bun patch <package>@<version>
```

### Patch Generation

**Property (type: boolean)**

Install a package containing modifications in `dir`

**Property (type: string)**

The directory to put the patch file in (only if --commit is used)

### Dependency Management

**Property (type: boolean)**

Don't install devDependencies. Alias: `-p`

**Property (type: boolean)**

Skip lifecycle scripts for all packages, including the project's `package.json` and trusted dependencies

**Property (type: boolean)**

Add to `trustedDependencies` in the project's `package.json` and install the package(s)

**Property (type: boolean)**

Install globally. Alias: `-g`

**Property (type: string)**

Exclude `dev`, `optional`, or `peer` dependencies from install

### Project Files & Lockfiles

**Property (type: boolean)**

Write a `yarn.lock` file (yarn v1). Alias: `-y`

**Property (type: boolean)**

Don't update `package.json` or save a lockfile

**Property (type: boolean)**

Save to `package.json` (true by default)

**Property (type: boolean)**

Disallow changes to lockfile

**Property (type: boolean)**

Save a text-based lockfile

**Property (type: boolean)**

Generate a lockfile without installing dependencies

### Installation Control

**Property (type: string)**

Platform-specific optimizations for installing dependencies. Possible values: `clonefile` (default on
macOS), `hardlink` (default on Linux and Windows), `symlink`, `copyfile`

**Property (type: string)**

Linker strategy (one of `isolated` or `hoisted`)

**Property (type: number)**

Only install packages published at least N seconds ago (security feature)

**Property (type: boolean)**

Don't install packages, update `package.json`, or save a lockfile. The package is still copied into&#x20;
`node_modules` for patching, and `--commit` still writes the patch file

**Property (type: boolean)**

Always request the latest versions from the registry & reinstall all dependencies. Alias: `-f`

**Property (type: boolean)**

Skip verifying integrity of newly downloaded packages

### Network & Registry

**Property (type: string)**

Provide a Certificate Authority signing certificate

**Property (type: string)**

Same as `--ca`, but as a file path to the certificate

**Property (type: string)**

Use a specific registry by default, overriding `.npmrc`, `bunfig.toml`, and environment
variables

**Property (type: number)**

Maximum number of concurrent network requests (default 48)

### Performance & Resource

**Property (type: number)**

Maximum number of concurrent jobs for lifecycle scripts (default: 2x CPU cores)

### Caching

**Property (type: string)**

Store & load cached data from a specific directory path

**Property (type: boolean)**

Ignore manifest cache entirely

### Output & Logging

**Property (type: boolean)**

Don't log anything

**Property (type: boolean)**

Disable the progress bar

**Property (type: boolean)**

Excessively verbose logging

**Property (type: boolean)**

Disable the progress bar

**Property (type: boolean)**

Don't print a summary

### Platform Targeting

**Property (type: string)**

Override CPU architecture for optional dependencies (e.g., `x64`, `arm64`, `*` for
all)

**Property (type: string)**

Override operating system for optional dependencies (e.g., `linux`, `darwin`, `*` for
all)

### Global Configuration & Context

**Property (type: string)**

Specify path to config file (`bunfig.toml`). Alias: `-c`

**Property (type: string)**

Set a specific current working directory

### Help

**Property (type: boolean)**

Print this help menu. Alias: `-h`

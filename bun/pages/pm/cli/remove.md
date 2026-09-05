> Release-pinned source for Bun bun-v1.4.2: [docs/pm/cli/remove.mdx](https://bun.com/docs/pm/cli/remove)

# bun remove

## Basic Usage

> **Note**
>
> **Alias**
>
> &#x20;—&#x20;
>
> `bun rm`
>
> ,&#x20;
>
> `bun uninstall`
>
> ,&#x20;
>
> `bun r`

```bash terminal icon="terminal"
bun remove ts-node
```

Bun removes the package from every dependency group in `package.json` that lists it and updates `bun.lock`. Once nothing else depends on the package, Bun deletes it from `node_modules`.

## `--filter`

> **Note**
>
> **Alias**
>
> &#x20;—&#x20;
>
> `-F`

In a monorepo, remove the package from the matching workspace(s) instead of the current directory's package, using the same patterns as [`bun add --filter`](https://bun.com/docs/pm/cli/add#--filter). Use `--filter '*'` to remove it from every workspace package. Workspaces that don't list the package are left untouched.

```bash terminal icon="terminal"
bun remove zod --filter api
bun remove zod --filter '*'
```

***

## CLI Usage

```bash terminal icon="terminal"
bun remove <package>
```

### General Information

**Property (type: boolean)**

Print this help menu. Alias: `-h`

### Configuration

**Property (type: string)**

Specify path to config file (`bunfig.toml`). Alias: `-c`

### Package.json Interaction

**Property (type: boolean)**

Don't update `package.json` or save a lockfile

**Property (type: boolean)**

Save to `package.json` (true by default)

**Property (type: boolean)**

Add to `trustedDependencies` in the project's `package.json` and install the package(s)

**Property (type: string)**

Remove the package(s) from the matching workspaces instead of the current package. Alias: `-F`

### Lockfile Behavior

**Property (type: boolean)**

Write a `yarn.lock` file (yarn v1). Alias: `-y`

**Property (type: boolean)**

Disallow changes to lockfile

**Property (type: boolean)**

Save a text-based lockfile

**Property (type: boolean)**

Generate a lockfile without installing dependencies

### Dependency Filtering

**Property (type: boolean)**

Don't install devDependencies. Alias: `-p`

**Property (type: string)**

Exclude `dev`, `optional`, or `peer` dependencies from install

### Network & Registry

**Property (type: string)**

Provide a Certificate Authority signing certificate

**Property (type: string)**

Same as `--ca`, but as a file path to the certificate

**Property (type: string)**

Use a specific registry by default, overriding `.npmrc`, `bunfig.toml` and environment variables

### Execution Control & Validation

**Property (type: boolean)**

Resolve the change but don't remove packages, update `package.json`, or save a lockfile (the project's own
lifecycle scripts still run)

**Property (type: boolean)**

Always request the latest versions from the registry & reinstall all dependencies. Alias: `-f`

**Property (type: boolean)**

Skip verifying integrity of newly downloaded packages

### Output & Logging

**Property (type: boolean)**

Don't log anything

**Property (type: boolean)**

Excessively verbose logging

**Property (type: boolean)**

Disable the progress bar

**Property (type: boolean)**

Don't print a summary

### Caching

**Property (type: string)**

Store & load cached data from a specific directory path

**Property (type: boolean)**

Ignore manifest cache entirely

### Script Execution

**Property (type: boolean)**

Skip lifecycle scripts for all packages, including the project's `package.json` and trusted dependencies

**Property (type: number)**

Maximum number of concurrent jobs for lifecycle scripts (default: 2x CPU cores)

### Scope & Path

**Property (type: boolean)**

Install globally. Alias: `-g`

**Property (type: string)**

Set a specific cwd

### Advanced & Performance

**Property (type: string)**

Platform-specific optimizations for installing dependencies. Possible values: `clonefile` (default on
macOS), `hardlink` (default on Linux and Windows), `symlink`, `copyfile`

**Property (type: number)**

Maximum number of concurrent network requests (default 48)

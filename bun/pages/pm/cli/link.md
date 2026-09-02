> Release-pinned source for Bun bun-v1.4.0: [docs/pm/cli/link.mdx](https://bun.com/docs/pm/cli/link)

Use `bun link` in a local directory to register the current package as a "linkable" package.

```bash terminal icon="terminal"
cd /path/to/cool-pkg
cat package.json
bun link
```

```txt
bun link v1.3.3 (7416672e)
Success! Registered "cool-pkg"

To use cool-pkg in a project, run:
  bun link cool-pkg

Or add it in dependencies in your package.json file:
  "cool-pkg": "link:cool-pkg"
```

You can now "link" this package into other projects using `bun link cool-pkg`. This command creates a symlink in the target project's `node_modules` directory pointing to the local directory.

```bash terminal icon="terminal"
cd /path/to/my-app
bun link cool-pkg
```

The `--save` flag also adds `cool-pkg` to the `dependencies` field of your app's package.json, with a version specifier that tells Bun to load from the registered local directory instead of installing from `npm`:

```json package.json icon="file-json"
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "cool-pkg": "link:cool-pkg" // [!code ++]
  }
}
```

## Unlinking

Use `bun unlink` in the root directory to unregister a local package.

```bash terminal icon="terminal"
cd /path/to/cool-pkg
bun unlink
```

```txt
bun unlink v1.3.3 (7416672e)
success: unlinked package "cool-pkg"
```

***

# CLI Usage

```bash
bun link <packages>
```

### Installation Scope

**Property (type: boolean)**

Install globally. Alias: `-g`

### Dependency Management

**Property (type: boolean)**

Don't install devDependencies. Alias: `-p`

**Property (type: string)**

Exclude `dev`, `optional`, or `peer` dependencies from install

### Project Files & Lockfiles

**Property (type: boolean)**

Write a `yarn.lock` file (yarn v1). Alias: `-y`

**Property (type: boolean)**

Disallow changes to lockfile

**Property (type: boolean)**

Save a text-based lockfile

**Property (type: boolean)**

Generate a lockfile without installing dependencies

**Property (type: boolean)**

Has no effect. `bun link` updates `package.json` and the lockfile only with `--save`

**Property (type: boolean)**

Save to `package.json`

**Property (type: boolean)**

Add to `trustedDependencies` in the project's `package.json` and install the package(s)

### Installation Control

**Property (type: boolean)**

Always request the latest versions from the registry & reinstall all dependencies. Alias: `-f`

**Property (type: boolean)**

Skip verifying integrity of newly downloaded packages

**Property (type: string)**

Platform-specific optimizations for installing dependencies. One of `clonefile`, `hardlink`,&#x20;
`symlink`, or `copyfile`

**Property (type: string)**

Linker strategy (one of `isolated` or `hoisted`)

**Property (type: boolean)**

With `bun link &lt;package&gt;`, resolve but don't install packages, update `package.json`, or
save a lockfile. Has no effect on bare `bun link`, which still registers the current package

**Property (type: boolean)**

Skip lifecycle scripts for all packages, including the project's `package.json` and trusted dependencies

### Network & Registry

**Property (type: string)**

Provide a Certificate Authority signing certificate

**Property (type: string)**

Same as `--ca`, but as a file path to the certificate

**Property (type: string)**

Use a specific registry by default, overriding `.npmrc`, `bunfig.toml`, and environment
variables

**Property (type: number)**

Maximum number of concurrent network requests

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

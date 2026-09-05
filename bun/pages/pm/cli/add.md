> Release-pinned source for Bun bun-v1.4.2: [docs/pm/cli/add.mdx](https://bun.com/docs/pm/cli/add)

To add a particular package:

```bash terminal icon="terminal"
bun add preact
```

To specify a version, version range, or tag:

```bash terminal icon="terminal"
bun add zod@3.20.0
bun add zod@^3.0.0
bun add zod@latest
```

Bun writes the package to `dependencies` unless you pass `--dev`, `--optional`, or `--peer`. If `package.json` already lists it in another group, Bun updates that entry in place.

## `--dev`

> **Note**
>
> **Alias**
>
> &#x20;—&#x20;
>
> `--development`
>
> ,&#x20;
>
> `-d`
>
> ,&#x20;
>
> `-D`

To add a package as a dev dependency (`"devDependencies"`):

```bash terminal icon="terminal"
bun add --dev @types/react
bun add -d @types/react
```

## `--optional`

To add a package as an optional dependency (`"optionalDependencies"`):

```bash terminal icon="terminal"
bun add --optional lodash
```

## `--peer`

To add a package as a peer dependency (`"peerDependencies"`):

```bash terminal icon="terminal"
bun add --peer @types/bun
```

Bun installs peer dependencies by default, so no additional `devDependencies` entry is needed.

## `--exact`

> **Note**
>
> **Alias**
>
> &#x20;—&#x20;
>
> `-E`

To pin a package to the resolved version, use `--exact`. Bun writes the exact version number to your `package.json` instead of a version range.

```bash terminal icon="terminal"
bun add react --exact
bun add react -E
```

The difference in `package.json`:

```json package.json icon="file-json"
{
  "dependencies": {
    // without --exact
    "react": "^18.2.0", // this matches >= 18.2.0 < 19.0.0

    // with --exact
    "react": "18.2.0" // this matches only 18.2.0 exactly
  }
}
```

To view a complete list of options for this command:

```bash terminal icon="terminal"
bun add --help
```

## `--catalog`

In a workspace, `--catalog` writes the version to the root `package.json` [catalog](https://bun.com/docs/pm/catalogs) and adds `"catalog:"` to the current package. `--catalog=<name>` uses a named catalog (`workspaces.catalogs.<name>`) and writes `"catalog:<name>"`.

```bash terminal icon="terminal"
bun add react --catalog
bun add vitest --catalog=testing
```

```json package.json icon="file-json"
// root package.json
{
  "workspaces": {
    "packages": ["packages/*"],
    "catalog": {
      "react": "^18.2.0" // [!code ++]
    }
  }
}
```

```json packages/app/package.json icon="file-json"
{
  "dependencies": {
    "react": "catalog:" // [!code ++]
  }
}
```

- If the catalog already has an entry, Bun reuses it and writes only `"catalog:"` to the current package. Pass an explicit version (`bun add react@19 --catalog`) to replace the entry — this affects every package that references it.
- If you omit the version and the current `package.json` already has a range (`"react": "^18.2.0"`), Bun catalogs that range.
- A package that already references `"catalog:<name>"` keeps using that catalog.
- Attach the name with `=`: `--catalog=testing`, not `--catalog testing`.
- Bun catalogs tarball and git specifiers under the package's real name. It rejects relative paths and workspace packages.

Even without the flag, `bun add react` (no version) writes `"catalog:"` if the default catalog already lists `react`. Pass a version to write a concrete range instead.

## `--filter`

> **Note**
>
> **Alias**
>
> &#x20;—&#x20;
>
> `-F`

In a monorepo, add the package to the matching workspace(s) instead of the current directory's package. See [filtering](https://bun.com/docs/pm/filter) for the pattern syntax. Repeat the flag to combine patterns; `!pattern` excludes.

```bash terminal icon="terminal"
bun add zod --filter api
bun add -d typescript --filter './packages/*'
bun add ./vendor/logger --filter '*'
bun remove zod --filter '*' --filter '!api'
```

- `*` matches every workspace package but not the root. To include the root, name it: `--filter '*' --filter '<root-name>'`.
- If no workspace matches, Bun writes nothing and the command fails.
- Bun resolves local paths from the current directory and rewrites them relative to each selected package.
- Bun updates `bun.lock` for the whole repo but links only the selected workspaces into `node_modules`, as with `bun install --filter`.
- Cannot be combined with `--global`.

## `--global`

> **Note**
>
> **Alias**
>
> &#x20;—&#x20;
>
> `bun add --global`
>
> ,&#x20;
>
> `bun add -g`
>
> ,&#x20;
>
> `bun install --global`
>
> &#x20;and&#x20;
>
> `bun install -g`

To install a package globally, use the `-g`/`--global` flag. This does not modify the `package.json` of your current project. Use it to install command-line tools.

```bash terminal icon="terminal"
bun add --global cowsay # or `bun add -g cowsay`
cowsay "Bun!"
```

```txt
 ______
< Bun! >
 ------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```toml bunfig.toml icon="settings"
[install]
# where `bun add --global` installs packages
globalDir = "~/.bun/install/global"

# where globally-installed package bins are linked
globalBinDir = "~/.bun/bin"
```

## Trusted dependencies

Unlike other npm clients, Bun does not execute arbitrary lifecycle scripts for installed dependencies, such as `postinstall`. These scripts represent a potential security risk, as they can execute arbitrary code on your machine.

To tell Bun to allow lifecycle scripts for a particular package, add the package to `trustedDependencies` in your package.json.

```json package.json icon="file-json"
{
  "name": "my-app",
  "version": "1.0.0",
  "trustedDependencies": ["my-trusted-package"] // [!code ++]
}
```

Bun reads this field and runs lifecycle scripts for `my-trusted-package`.

## Git dependencies

To add a dependency from a public or private git repository:

```bash terminal icon="terminal"
bun add git@github.com:moment/moment.git
```

> **Note**
>
> To install private repositories, your system needs the appropriate SSH credentials to access the repository.

Bun supports a variety of protocols, including [`github`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#github-urls), [`git`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#git-urls-as-dependencies), `git+ssh`, and `git+https`.

```json package.json icon="file-json"
{
  "dependencies": {
    "dayjs": "git+https://github.com/iamkun/dayjs.git",
    "lodash": "git+ssh://github.com/lodash/lodash.git#4.17.21",
    "moment": "git@github.com:moment/moment.git",
    "zod": "github:colinhacks/zod"
  }
}
```

## Tarball dependencies

A package name can correspond to a publicly hosted `.tgz` file. Bun downloads and installs the package from that tarball URL rather than from the package registry.

```sh terminal icon="terminal"
bun add zod@https://registry.npmjs.org/zod/-/zod-3.21.4.tgz
```

`bun add` writes the URL to your `package.json`:

```json package.json icon="file-json"
{
  "dependencies": {
    "zod": "https://registry.npmjs.org/zod/-/zod-3.21.4.tgz"
  }
}
```

A tarball URL can carry credentials, such as `https://user:password@example.com/zod-3.21.4.tgz`. Bun sends them as an `Authorization: Basic` header and requests the URL without them, like npm. The URL, credentials included, is written to `package.json` and to the lockfile.

***

## CLI Usage

```bash
bun add <package> <@version>
```

### Dependency Management

**Property (type: boolean)**

Don't install devDependencies. Alias: `-p`

**Property (type: string)**

Exclude `dev`, `optional`, or `peer` dependencies from install

**Property (type: boolean)**

Install globally. Alias: `-g`

**Property (type: boolean)**

Add dependency to `devDependencies`. Alias: `-d`

**Property (type: boolean)**

Add dependency to `optionalDependencies`

**Property (type: boolean)**

Add dependency to `peerDependencies`

**Property (type: boolean)**

Add the exact version instead of the `^` range. Alias: `-E`

**Property (type: boolean)**

Only add dependencies to `package.json` if they are not already present

**Property (type: string)**

Add the resolved version to the root `package.json` catalog and depend on it as `catalog:`;&#x20;
`--catalog=NAME` targets `catalogs.NAME`

**Property (type: string)**

Add the package(s) to the matching workspaces instead of the current package. Alias: `-F`

### Project Files & Lockfiles

**Property (type: boolean)**

Write a `yarn.lock` file (yarn v1). Alias: `-y`

**Property (type: boolean)**

Don't update `package.json` or save a lockfile

**Property (type: boolean)**

Save to `package.json`

**Property (type: boolean)**

Disallow changes to lockfile

**Property (type: boolean)**

Add to `trustedDependencies` in the project's `package.json` and install the package(s)

**Property (type: boolean)**

Save a text-based lockfile

**Property (type: boolean)**

Generate a lockfile without installing dependencies

### Installation Control

**Property (type: boolean)**

Resolve the packages but don't install them, update `package.json`, or save a lockfile (the project's own
lifecycle scripts still run)

**Property (type: boolean)**

Always request the latest versions from the registry & reinstall all dependencies. Alias: `-f`

**Property (type: boolean)**

Skip verifying integrity of newly downloaded packages

**Property (type: boolean)**

Skip lifecycle scripts for all packages, including the project's `package.json` and trusted dependencies

**Property (type: boolean)**

Recursively analyze & install dependencies of files passed as arguments (using Bun's bundler). Alias:&#x20;
`-a`

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

**Property (type: string)**

Platform-specific optimizations for installing dependencies. Possible values: `clonefile` (default on
macOS), `hardlink` (default on Linux and Windows), `symlink`, `copyfile`

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

Excessively verbose logging

**Property (type: boolean)**

Disable the progress bar

**Property (type: boolean)**

Don't print a summary

### Global Configuration & Context

**Property (type: string)**

Specify path to config file (`bunfig.toml`). Alias: `-c`

**Property (type: string)**

Set a specific current working directory

### Help

**Property (type: boolean)**

Print this help menu. Alias: `-h`

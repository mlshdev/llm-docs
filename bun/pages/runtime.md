> Release-pinned source for Bun bun-v1.4.0: [docs/runtime/index.mdx](https://bun.com/docs/runtime)

The Bun Runtime is designed to start fast and run fast.

Bun uses the [JavaScriptCore engine](https://developer.apple.com/documentation/javascriptcore), developed by Apple for Safari. JavaScriptCore usually starts and runs faster than V8, the engine used by Node.js and Chromium-based browsers. Bun's transpiler and runtime are written in Rust. On Linux, Bun starts [4x faster](https://twitter.com/jarredsumner/status/1499225725492076544) than Node.js.

| Command         | Time     |
| --------------- | -------- |
| `bun hello.js`  | `5.2ms`  |
| `node hello.js` | `25.1ms` |

The benchmark runs a Hello World script on Linux.

## Run a file

Use `bun run` to execute a source file.

```bash terminal icon="terminal"
bun run index.js
```

Bun supports TypeScript and JSX with no configuration. Bun transpiles every file on the fly with its native [transpiler](https://bun.com/docs/runtime/transpiler) before running it.

```bash terminal icon="terminal"
bun run index.js
bun run index.jsx
bun run index.ts
bun run index.tsx
```

Alternatively, you can omit the `run` keyword and use the "naked" command; it behaves identically.

```bash terminal icon="terminal"
bun index.tsx
bun index.js
```

### `--watch`

To run a file in watch mode, use the `--watch` flag.

```bash terminal icon="terminal"
bun --watch run index.tsx
```

> **Note**
>
> When using `bun run`, put Bun flags like `--watch` immediately after `bun`.
>
> ```bash
> bun --watch run dev # ✔️ do this
> bun run dev --watch # ❌ don't do this
> ```
>
> `bun` ignores flags at the end of the command and passes them through to the `"dev"` script itself.

## Run a `package.json` script

> **Note**
>
> Compare to `npm run <script>` or `yarn <script>`

```sh
bun [bun flags] run <script> [script flags]
```

Your `package.json` can define named `"scripts"` that correspond to shell commands.

```json package.json icon="file-json"
{
  // ... other fields
  "scripts": {
    "clean": "rm -rf dist && echo 'Done.'",
    "dev": "bun server.ts"
  }
}
```

Use `bun run <script>` to execute these scripts.

```bash terminal icon="terminal"
bun run clean
rm -rf dist && echo 'Done.'
```

```txt
Done.
```

Bun executes the script command in a subshell. On Linux & macOS, it checks for the following shells in order, using the first one it finds: `bash`, `sh`, `zsh`. On Windows, it uses the [Bun Shell](https://bun.com/docs/runtime/shell) to support bash-like syntax and many common commands.

> **Note**
>
> ⚡️ The startup time for&#x20;
>
> `npm run`
>
> &#x20;on Linux is roughly 170ms; with Bun it is&#x20;
>
> `6ms`
>
> .

You can also run scripts with the shorter command `bun <script>`. If a built-in `bun` command has the same name, the built-in command takes precedence; use the explicit `bun run <script>` to run your package script instead.

```bash terminal icon="terminal"
bun run dev
```

To see a list of available scripts, run `bun run` without any arguments.

```bash terminal icon="terminal"
bun run
```

```txt
...
package.json scripts (2 found):
  $ bun run clean
    rm -rf dist && echo 'Done.'

  $ bun run dev
    bun server.ts
```

Bun respects lifecycle hooks. For instance, `bun run clean` runs `preclean` and `postclean`, if defined. If the `pre<script>` fails, Bun does not run the script itself.

### `--bun`

It's common for `package.json` scripts to reference locally-installed CLIs like `vite` or `next`. These CLIs are often JavaScript files marked with a [shebang](https://en.wikipedia.org/wiki/Shebang_\(Unix\)) to indicate that they should be executed with `node`.

```js cli.js icon="/icons/javascript.svg"
#!/usr/bin/env node

// do stuff
```

By default, Bun respects this shebang and executes the script with `node`. The `--bun` flag overrides it: the CLI runs with Bun instead of Node.js.

```bash terminal icon="terminal"
bun run --bun vite
```

### Filtering

In a monorepo, the `--filter` argument runs a script in many packages at once.

`bun run --filter <pattern> <script>` executes `<script>` in every package selected by `<pattern>`. The pattern can be a package name glob, a `./path`, a `{dir}` directory or a dependency relation like `foo...`.
For example, if you have subdirectories containing packages named `foo`, `bar` and `baz`, running

```bash terminal icon="terminal"
bun run --filter 'ba*' <script>
```

executes `<script>` in both `bar` and `baz`, but not in `foo`.

See [`--filter`](https://bun.com/docs/pm/filter#running-scripts-with-filter).

## `bun run -` to pipe code from stdin

`bun run -` reads JavaScript, TypeScript, TSX, or JSX from stdin and executes it without writing to a temporary file first.

```bash terminal icon="terminal"
echo "console.log('Hello')" | bun run -
```

```txt
Hello
```

You can also use `bun run -` to redirect files into Bun. For example, to run a `.js` file as if it were a `.ts` file:

```bash terminal icon="terminal"
echo "console.log!('This is TypeScript!' as any)" > secretly-typescript.js
bun run - < secretly-typescript.js
```

```txt
This is TypeScript!
```

`bun run -` treats all input as TypeScript with JSX support.

## `bun run --console-depth`

Control the depth of object inspection in console output with the `--console-depth` flag.

```bash terminal icon="terminal"
bun --console-depth 5 run index.tsx
```

`--console-depth` sets how deeply Bun displays nested objects in `console.log()` output. The default depth is `2`. Higher values show more nested properties but may produce verbose output for complex objects.

```ts console.ts icon="/icons/typescript.svg"
const nested = { a: { b: { c: { d: "deep" } } } };
console.log(nested);
// With --console-depth 2 (default): { a: { b: { c: [Object] } } }
// With --console-depth 4: { a: { b: { c: { d: 'deep' } } } }
```

## `bun run --smol`

In memory-constrained environments, use the `--smol` flag to reduce memory usage at a cost to performance.

```bash terminal icon="terminal"
bun --smol run index.tsx
```

`--smol` makes the garbage collector run more frequently, which can slow down execution. Bun adjusts the garbage collector's heap size based on the available memory (accounting for cgroups and other memory limits) with and without the `--smol` flag. The flag is therefore mostly useful when you want the heap to grow more slowly.

## Resolution order

Bun always executes absolute paths and paths starting with `./` or `.\\` as source files. Unless you use `bun run`, a name with an allowed extension resolves to the file rather than a `package.json` script.

When a `package.json` script and a file have the same name, `bun run` prefers the script. The full resolution order is:

1. `package.json` scripts: `bun run build`
2. Source files: `bun run src/main.js`
3. Binaries from project packages: `bun add eslint && bun run eslint`
4. (`bun run` only) System commands: `bun run ls`

***

# CLI Usage

```bash
bun run <file or script>
```

### General Execution Options

**Property (type: boolean)**

Don't print the script command

**Property (type: boolean)**

Exit without an error if the entrypoint does not exist

**Property (type: string)**

Evaluate argument as a script. Alias: `-e`

**Property (type: string)**

Evaluate argument as a script and print the result. Alias: `-p`

**Property (type: boolean)**

Display this menu and exit. Alias: `-h`

### Workspace Management

**Property (type: number)**

Number of lines of script output shown when using --filter (default: 10). Set to 0 to show all lines

**Property (type: string)**

Run a script in all workspace packages matching the pattern. Alias: `-F`

**Property (type: boolean)**

Run a script in all workspace packages (from the `workspaces` field in `package.json`)

**Property (type: boolean)**

Run multiple scripts or workspace scripts concurrently with prefixed output

**Property (type: boolean)**

Run multiple scripts or workspace scripts one after another with prefixed output

**Property (type: boolean)**

When using `--parallel` or `--sequential`, continue running other scripts when one fails

### Runtime & Process Control

**Property (type: boolean)**

Force a script or package to use Bun's runtime instead of Node.js (via symlinking node). Alias: `-b`

**Property (type: string)**

Control the shell used for `package.json` scripts. Supports either `bun` or `system`

**Property (type: boolean)**

Open the Node.js-compatible REPL (`node:repl`). When combined with `-e`, starts the REPL and
then evaluates the script. Under `--interactive`, `-e` is raw JavaScript (matching&#x20;
`node -i -e`). Use `bun repl` for TypeScript. Distinct from `bun repl`, which is
Bun's native REPL.

**Property (type: boolean)**

Use less memory, but run garbage collection more often

**Property (type: boolean)**

Expose `gc()` on the global object. Has no effect on `Bun.gc()`

**Property (type: boolean)**

Silence all deprecation warnings

**Property (type: boolean)**

Throw deprecation warnings as errors

**Property (type: string)**

Set the process title

**Property (type: boolean)**

Force `Buffer.allocUnsafe(size)` to be zero-filled

**Property (type: boolean)**

Throw an error if `process.dlopen` is called, and disable export condition `node-addons`

**Property (type: string)**

One of `strict`, `throw`, `warn`, `none`, or&#x20;
`warn-with-error-code`

**Property (type: number)**

Set the default depth for `console.log` object inspection (default: 2)

### Development Workflow

**Property (type: boolean)**

Automatically restart the process on file change

**Property (type: string)**

Signal whose handlers run when --watch restarts the process

**Property (type: boolean)**

Enable auto reload in the Bun runtime, test runner, or bundler

**Property (type: boolean)**

Disable clearing the terminal screen on reload when --hot or --watch is enabled

### Debugging

**Property (type: string)**

Activate Bun's debugger

**Property (type: string)**

Activate Bun's debugger, wait for a connection before executing

**Property (type: string)**

Activate Bun's debugger, set breakpoint on first line of code and wait

### Dependency & Module Resolution

**Property (type: string)**

Import a module before Bun loads other modules. Alias: `-r`

**Property (type: string)**

Alias of --preload, for Node.js compatibility

**Property (type: string)**

Alias of --preload, for Node.js compatibility

**Property (type: boolean)**

Disable auto install in the Bun runtime

**Property (type: string)**

Configure auto-install behavior. One of `auto` (default, auto-installs when no node\_modules),&#x20;
`fallback` (missing packages only), `force` (always)

**Property (type: boolean)**

Auto-install dependencies during execution. Equivalent to --install=fallback

**Property (type: boolean)**

Skip staleness checks for packages in the Bun runtime and resolve from disk

**Property (type: boolean)**

Use the latest matching versions of packages in the Bun runtime, always checking npm

**Property (type: string)**

Pass custom conditions to resolve

**Property (type: string)**

Main fields to lookup in `package.json`

**Property (type: boolean)**

Preserve symlinks when resolving files

**Property (type: boolean)**

Preserve symlinks when resolving the main entry point

**Property (type: string)**

Defaults to: `.tsx,.ts,.jsx,.cts,.cjs,.js,.mjs,.mts,.json,.node`

### Transpilation & Language Features

**Property (type: string)**

Specify custom `tsconfig.json`. Default `$cwd/tsconfig.json`

**Property (type: string)**

Substitute K:V while parsing, e.g. `--define process.env.NODE_ENV:"development"`. Bun parses values as
JSON. Alias: `-d`

**Property (type: string)**

Remove function calls, e.g. `--drop=console` removes all `console.*` calls

**Property (type: string)**

Parse files with `.ext:loader`, e.g. `--loader .js:jsx`. Valid loaders: `js`,&#x20;
`jsx`, `ts`, `tsx`, `json`, `toml`, `text`,&#x20;
`file`, `wasm`, `napi`. Alias: `-l`

**Property (type: boolean)**

Disable macro execution in the bundler, transpiler and runtime

**Property (type: string)**

Changes the function called when compiling JSX elements using the classic JSX runtime

**Property (type: string)**

Changes the function called when compiling JSX fragments

**Property (type: string)**

Declares the module specifier used to import the jsx and jsxs factory functions. Default: `react`

**Property (type: string)**

`automatic` (default) or `classic`

**Property (type: boolean)**

Treat JSX elements as having side effects (disable pure annotations)

**Property (type: boolean)**

Ignore tree-shaking annotations such as `@__PURE__`

### Networking & Security

**Property (type: number)**

Set the default port for `Bun.serve`

**Property (type: string)**

Preconnect to a URL while code is loading

**Property (type: number)**

Set the maximum size of HTTP headers in bytes. Default is 16KiB

**Property (type: string)**

Set the default order of DNS lookup results. Valid orders: `verbatim` (default), `ipv4first`,&#x20;
`ipv6first`

**Property (type: boolean)**

Use the system's trusted certificate authorities

**Property (type: boolean)**

Use OpenSSL's default CA store

**Property (type: boolean)**

Use bundled CA store

**Property (type: boolean)**

Preconnect to `$REDIS_URL` at startup

**Property (type: boolean)**

Preconnect to PostgreSQL at startup

**Property (type: string)**

Set the default User-Agent header for HTTP requests

### Global Configuration & Context

**Property (type: string)**

Load environment variables from the specified file(s)

**Property (type: string)**

Absolute path to resolve files & entrypoints from. This only changes the process' cwd

**Property (type: string)**

Specify path to Bun config file. Default `$cwd/bunfig.toml`. Alias: `-c`

## Examples

Run a JavaScript or TypeScript file:

```bash
bun run ./index.js
bun run ./index.tsx
```

Run a package.json script:

```bash
bun run dev
bun run lint
```

> Release-pinned source for Bun bun-v1.4.2: [docs/runtime/templating/init.mdx](https://bun.com/docs/runtime/templating/init)

# bun init

Scaffold a new Bun project with `bun init`.

```bash terminal icon="terminal"
bun init my-app
```

```txt
? Select a project template - Press return to submit.
❯ Blank
  React
  Library

✓ Select a project template: Blank

 + .gitignore
 + CLAUDE.md
 + .cursor/rules/use-bun-instead-of-node-vite-npm-pnpm.mdc -> CLAUDE.md
 + index.ts
 + tsconfig.json (for editor autocomplete)
 + README.md
```

Press `enter` to accept the default answer for each prompt, or pass the `-y` flag to auto-accept the defaults.

***

`bun init` infers settings with sane defaults and is non-destructive when run multiple times.

![Demo](https://user-images.githubusercontent.com/709451/183006613-271960a3-ff22-4f7c-83f5-5e18f684c836.gif)

It creates:

- a `package.json` file with a name that defaults to the current directory name
- a `tsconfig.json` or `jsconfig.json` file, depending on whether the entry point is a TypeScript file
- an entry point, which defaults to `index.ts` unless any of `index.{tsx, jsx, js, mts, mjs}` exist or the `package.json` specifies a `module` or `main` field
- a `README.md` file

AI Agent rules (disable with `$BUN_AGENT_RULE_DISABLED=1`):

- a `CLAUDE.md` file when `bun init` detects Claude CLI (disable with `CLAUDE_CODE_AGENT_RULE_DISABLED` env var)
- a `.cursor/rules/*.mdc` file when `bun init` detects Cursor (disable with `CURSOR_AGENT_RULE_DISABLED` env var); the file tells [Cursor AI](https://cursor.sh) to use Bun instead of Node.js and npm

Pass `-y` or `--yes` to accept the defaults without prompting.

At the end, it runs `bun install` to install `@types/bun`.

***

## CLI Usage

```bash terminal icon="terminal"
bun init <folder?>
```

### Initialization Options

**Property (type: boolean)**

&#x20;

Accept all default prompts without asking questions. Alias: `-y`&#x20;

**Property (type: boolean)**

&#x20;

Only initialize type definitions (skip app scaffolding). Alias: `-m`&#x20;

### Project Templates

**Property (type: string|boolean)**

&#x20;

Scaffold a React project. When used without a value, creates a baseline React app.
\
&#x20;Accepts values for presets:&#x20;

&#x20;

`tailwind` – React app preconfigured with Tailwind CSS

&#x20;

`shadcn` – React app with `@shadcn/ui` and Tailwind CSS

&#x20;

&#x20;

Examples:&#x20;

`       bun init --react{"\n"}bun init --react=tailwind{"\n"}bun init --react=shadcn
    `

&#x20;

### Output & Files

**Property (type: info)**

&#x20;

Initializes project files and configuration for the chosen options. Exact files vary by template.&#x20;

### Help

**Property (type: boolean)**

&#x20;

Print this help menu. Alias: `-h`&#x20;

### Examples

- Accept all defaults

  ```bash terminal icon="terminal"
  bun init -y
  ```

- React

  ```bash terminal icon="terminal"
  bun init --react
  ```

- React + Tailwind CSS

  ```bash terminal icon="terminal"
  bun init --react=tailwind
  ```

- React + @shadcn/ui
  ```bash terminal icon="terminal"
  bun init --react=shadcn
  ```

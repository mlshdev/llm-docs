> Pinned source for Bun bun-v1.4.3: [docs/typescript.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/typescript.mdx)
> Canonical documentation: https://bun.com/docs/typescript

# TypeScript

To get TypeScript definitions for Bun's built-in APIs, install `@types/bun`.

```zsh terminal icon="terminal"
bun add -d @types/bun # dev dependency
```

You can now reference the `Bun` global in your TypeScript files without errors in your editor.

## Suggested `compilerOptions`

Bun supports top-level await, JSX, and imports with `.ts` extensions, which TypeScript doesn't allow by default. Use these `compilerOptions` in a Bun project so TypeScript doesn't warn about those features.

```json tsconfig.json icon="file-json"
{
  "compilerOptions": {
    // Environment setup & latest features
    "lib": ["ESNext"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,
    "types": ["bun"],

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  }
}
```

Running `bun init` in a new directory generates this `tsconfig.json` for you.

```sh terminal icon="terminal"
bun init
```

## Type checking

Bun runs TypeScript files without checking their types. Use [`bun check`](https://bun.com/docs/runtime/check) to type check your project.

```sh terminal icon="terminal"
bun check
```

## TypeScript 6 and 7

If you're using TypeScript 6.0 or later, you also need `"types": ["bun"]` in your `compilerOptions`. See [TypeScript 6 and 7](https://bun.com/docs/typescript-6).

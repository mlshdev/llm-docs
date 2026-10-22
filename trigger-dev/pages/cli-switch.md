> Pinned source for Trigger.dev v4.7.7: [docs/cli-switch.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/cli-switch.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-switch

# CLI switch command

The `trigger.dev switch` command can be used to switch between profiles.

Run the command like this:

```bash npm
npx trigger.dev@latest switch [profile]
```

```bash pnpm
pnpm dlx trigger.dev@latest switch [profile]
```

```bash yarn
yarn dlx trigger.dev@latest switch [profile]
```

It will switch to the specified profile. If no profile is specified, it will list all available profiles and run interactively.

## Arguments

```
npx trigger.dev@latest switch [profile]
```

**Property (type: \[profile])**

The profile to switch to. If not specified, it will list all available profiles and run interactively.

> Pinned source for Runpod main: [flash/cli/update.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/flash/cli/update.mdx)
> Canonical documentation: https://docs.runpod.io/flash/cli/update

# update

Update the Flash CLI to the latest or a selected version, understand automatic update checks, and configure when those checks run.

Update the Flash CLI to the latest version or a specific version. The command fetches version information from PyPI and installs using uv (when available) or pip.

```bash
flash update [OPTIONS]
```

## Examples

Update to the latest version:

```bash
flash update
```

Update to a specific version:

```bash
flash update --version 1.4.0
```

## Flags

**--version, -V (type: string)**

Target version to install. If not specified, updates to the latest version available on PyPI.

## Automatic update checks

Flash checks for newer versions in the background when you run most commands. If an update is available, a notice appears after the command completes:

```
A new version of runpod-flash is available: 2.0.0
  Run 'flash update' to upgrade.
```

This check runs at most once every 24 hours and is cached locally to `~/.config/runpod/update_check.json`.

### Excluded commands

The background check does not run for:

- `flash dev` - Long-running development server where the notice would appear at an unpredictable time.
- `flash update` - Already managing versions directly.

### Disabling update checks

Set the `FLASH_NO_UPDATE_CHECK` environment variable to skip automatic update checks:

```bash
export FLASH_NO_UPDATE_CHECK=1
```

Update checks are also skipped automatically in CI environments (when the `CI` environment variable is set) and in non-interactive sessions (when neither stdout nor stderr is a TTY).

## Related commands

- [`flash --version`](https://docs.runpod.io/flash/cli/overview#getting-help) - Check your current Flash version

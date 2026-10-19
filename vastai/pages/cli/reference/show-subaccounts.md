> Pinned source for Vast.ai main: [cli/reference/show-subaccounts.mdx](https://github.com/vast-ai/docs/blob/e0e0293c3626e419c16dcfc6f799976252de5c5f/cli/reference/show-subaccounts.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-subaccounts

# vastai show subaccounts

Get current subaccounts

## Usage

```bash
vastai show subaccounts [OPTIONS]
```

## Options

**Property (type: boolean)**

display subaccounts from current user (alias: `--quiet`)

## Examples

```bash
vastai show subaccounts
```

## Global Options

The following options are available for all commands:

| Option          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `--url URL`     | Server REST API URL                                   |
| `--retry N`     | Retry limit                                           |
| `--raw`         | Output machine-readable JSON                          |
| `--explain`     | Verbose explanation of API calls                      |
| `--api-key KEY` | API key (defaults to `~/.config/vastai/vast_api_key`) |

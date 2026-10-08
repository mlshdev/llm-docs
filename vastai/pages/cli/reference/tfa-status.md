> Pinned source for Vast.ai main: [cli/reference/tfa-status.mdx](https://github.com/vast-ai/docs/blob/8629af9a05e884dd603b6a24bbb7c39826c1a10d/cli/reference/tfa-status.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/tfa-status

# vastai tfa status

Show the current 2FA status for your account, including whether 2FA is enabled, all active methods, and the number of backup codes remaining.

## Usage

```bash
vastai tfa status
```

## Examples

```bash
vastai tfa status
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

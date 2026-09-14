> Pinned source for Vast.ai main: [cli/reference/show-audit-logs.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/show-audit-logs.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-audit-logs

# vastai show audit-logs

Display account's history of important actions

## Usage

```bash
vastai show audit-logs [--api-key API_KEY] [--raw]
```

## Examples

```bash
vastai show audit-logs
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

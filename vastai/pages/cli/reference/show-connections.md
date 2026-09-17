> Pinned source for Vast.ai main: [cli/reference/show-connections.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/show-connections.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-connections

# vastai show connections

Display user's cloud connections

## Usage

```bash
vastai show connections [--api-key API_KEY] [--raw]
```

## Examples

```bash
vastai show connections
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

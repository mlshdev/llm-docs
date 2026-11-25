> Pinned source for Vast.ai main: [cli/reference/show-ipaddrs.mdx](https://github.com/vast-ai/docs/blob/b0594c0dc62dd2305fdfc24e89104075db59ece5/cli/reference/show-ipaddrs.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-ipaddrs

# vastai show ipaddrs

Display user's history of ip addresses

## Usage

```bash
vastai show ipaddrs [--api-key API_KEY] [--raw]
```

## Examples

```bash
vastai show ipaddrs
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

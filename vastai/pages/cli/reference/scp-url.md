> Pinned source for Vast.ai main: [cli/reference/scp-url.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/scp-url.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/scp-url

# vastai scp-url

scp url helper

## Usage

```bash
vastai scp-url ID
```

## Arguments

**Property (type: integer; required)**

id

## Examples

```bash
vastai scp-url <ID>
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

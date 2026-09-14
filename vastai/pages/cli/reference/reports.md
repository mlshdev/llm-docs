> Pinned source for Vast.ai main: [cli/reference/reports.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/reports.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/reports

# vastai reports

Get the user reports for a given machine

## Usage

```bash
vastai reports ID
```

## Arguments

**Property (type: integer; required)**

machine id

## Examples

```bash
vastai reports <ID>
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

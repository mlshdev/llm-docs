> Pinned source for Vast.ai main: [cli/reference/delete-api-key.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/cli/reference/delete-api-key.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-api-key

# vastai delete api-key

Remove an api-key

## Usage

```bash
vastai delete api-key ID
```

## Arguments

**Property (type: integer; required)**

id of apikey to remove

## Examples

```bash
vastai delete api-key <ID>
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

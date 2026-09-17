> Pinned source for Vast.ai main: [cli/reference/delete-env-var.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/delete-env-var.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-env-var

# vastai delete env-var

Delete a user environment variable

## Usage

```bash
vastai delete env-var <name>
```

## Arguments

**Property (type: string; required)**

Environment variable name to delete

## Examples

```bash
vastai delete env-var <NAME>
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

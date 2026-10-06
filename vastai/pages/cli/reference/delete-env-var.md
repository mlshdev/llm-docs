> Pinned source for Vast.ai main: [cli/reference/delete-env-var.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/cli/reference/delete-env-var.mdx)
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

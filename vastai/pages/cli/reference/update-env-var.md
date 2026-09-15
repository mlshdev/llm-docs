> Pinned source for Vast.ai main: [cli/reference/update-env-var.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/update-env-var.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/update-env-var

# vastai update env-var

Update an existing user environment variable

## Usage

```bash
vastai update env-var <name> <value>
```

## Arguments

**Property (type: string; required)**

Environment variable name to update

**Property (type: string; required)**

New environment variable value

## Examples

```bash
vastai update env-var <NAME> <VALUE>
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

> Commit-pinned source for Vast.ai main: [cli/reference/create-env-var.mdx](https://docs.vast.ai/cli/reference/create-env-var)

# vastai create env-var

Create a new user environment variable

## Usage

```bash
vastai create env-var <name> <value>
```

## Arguments

**Property (type: string; required)**

Environment variable name

**Property (type: string; required)**

Environment variable value

## Examples

```bash
vastai create env-var <NAME> <VALUE>
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

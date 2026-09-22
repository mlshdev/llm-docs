> Pinned source for Vast.ai main: [cli/reference/label-instance.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/label-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/label-instance

# vastai label instance

Assign a string label to an instance

## Usage

```bash
vastai label instance <id> <label>
```

## Arguments

**Property (type: integer; required)**

id of instance to label

**Property (type: string; required)**

label to set

## Examples

```bash
vastai label instance <ID> <LABEL>
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

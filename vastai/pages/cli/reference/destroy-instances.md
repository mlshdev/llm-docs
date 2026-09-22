> Pinned source for Vast.ai main: [cli/reference/destroy-instances.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/destroy-instances.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/destroy-instances

# vastai destroy instances

Destroy a list of instances (irreversible, deletes data)

## Usage

```bash
vastai destroy instances [--raw] <id>
```

## Arguments

**Property (type: integer; required)**

ids of instance to destroy

## Examples

```bash
vastai destroy instances <IDS>
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

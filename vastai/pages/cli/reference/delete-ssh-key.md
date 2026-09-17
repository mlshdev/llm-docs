> Pinned source for Vast.ai main: [cli/reference/delete-ssh-key.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/delete-ssh-key.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-ssh-key

# vastai delete ssh-key

Remove an ssh-key

## Usage

```bash
vastai delete ssh-key ID
```

## Arguments

**Property (type: integer; required)**

id ssh key to delete

## Examples

```bash
vastai delete ssh-key <ID>
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

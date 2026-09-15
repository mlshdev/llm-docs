> Pinned source for Vast.ai main: [cli/reference/update-ssh-key.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/update-ssh-key.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/update-ssh-key

# vastai update ssh-key

Update an existing SSH key

## Usage

```bash
vastai update ssh-key ID SSH_KEY
```

## Arguments

**Property (type: integer; required)**

id of the ssh key to update

**Property (type: string; required)**

new public key value

## Examples

```bash
vastai update ssh-key <ID> <SSH_KEY>
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

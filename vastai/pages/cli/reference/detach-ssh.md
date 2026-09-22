> Pinned source for Vast.ai main: [cli/reference/detach-ssh.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/detach-ssh.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/detach-ssh

# vastai detach ssh

Detach an ssh key from an instance

## Usage

```bash
vastai detach instance_id ssh_key_id
```

## Arguments

**Property (type: integer; required)**

id of the instance

**Property (type: string; required)**

id of the key to detach to the instance

## Description

Example: vastai detach 99999 12345

## Examples

```bash
vastai detach ssh <INSTANCE_ID> <SSH_KEY_ID>
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

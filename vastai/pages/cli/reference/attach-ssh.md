> Commit-pinned source for Vast.ai main: [cli/reference/attach-ssh.mdx](https://docs.vast.ai/cli/reference/attach-ssh)

# vastai attach ssh

Attach an ssh key to an instance. This will allow you to connect to the instance with the ssh key

## Usage

```bash
vastai attach ssh instance_id ssh_key
```

## Arguments

**Property (type: integer; required)**

id of instance to attach to

**Property (type: string; required)**

ssh key to attach to instance

## Description

Attach an ssh key to an instance. This will allow you to connect to the instance with the ssh key.

## Examples

```bash
vast attach ssh 12371 AAAAB3NzaC1yc2EAAA...
 vast attach ssh 12371 $(cat ~/.ssh/id_rsa.pub)
 vast attach ssh 12371 ~/.ssh/id_rsa.pub

All examples attaches the ssh key to instance 12371
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

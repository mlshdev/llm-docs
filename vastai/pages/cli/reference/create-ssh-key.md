> Pinned source for Vast.ai main: [cli/reference/create-ssh-key.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/create-ssh-key.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/create-ssh-key

# vastai create ssh-key

Create a new ssh-key

## Usage

```bash
vastai create ssh-key [ssh_public_key] [-y]
```

## Arguments

**Property (type: string; required)**

add your existing ssh public key to your account (from the .pub file). If no public key is provided, a new key pair will be generated.

## Options

**Property (type: boolean)**

automatically answer yes to prompts (alias: `--yes`)

## Description

You may use this command to add an existing public key, or create a new ssh key pair and add that public key, to your Vast account.

If you provide an ssh\_public\_key.pub argument, that public key will be added to your Vast account. All ssh public keys should be in OpenSSH format.

Example: $vastai create ssh-key 'ssh\_public\_key.pub'

If you don't provide an ssh\_public\_key.pub argument, a new Ed25519 key pair will be generated.

Example: $vastai create ssh-key

The generated keys are saved as \~/.ssh/id\_ed25519 (private) and \~/.ssh/id\_ed25519.pub (public). Any existing id\_ed25519 keys are backed up as .backup\_\<timestamp>.
The public key will be added to your Vast account.

All ssh public keys are stored in your Vast account and can be used to connect to instances they've been added to.

## Examples

```bash
vastai create ssh-key <SSH_KEY>
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

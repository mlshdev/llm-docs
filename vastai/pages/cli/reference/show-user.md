> Pinned source for Vast.ai main: [cli/reference/show-user.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/show-user.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-user

# vastai show user

Get current user data

## Usage

```bash
vastai show user [OPTIONS]
```

## Options

**Property (type: boolean)**

display information about user (alias: `--quiet`)

## Description

Shows stats for logged-in user. These include user balance, email, and ssh key. Does not show API key.

## Examples

```bash
vastai show user
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

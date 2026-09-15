> Pinned source for Vast.ai main: [cli/reference/invite-member.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/invite-member.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/invite-member

# vastai invite member

Invite a team member

## Usage

```bash
vastai invite member --email EMAIL --role ROLE
```

## Options

**Property (type: string)**

email of user to be invited

**Property (type: string)**

role of user to be invited

## Examples

```bash
vastai invite member
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

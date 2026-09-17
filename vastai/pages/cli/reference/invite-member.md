> Pinned source for Vast.ai main: [cli/reference/invite-member.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/invite-member.mdx)
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

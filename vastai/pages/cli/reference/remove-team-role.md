> Pinned source for Vast.ai main: [cli/reference/remove-team-role.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/remove-team-role.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/remove-team-role

# vastai remove team-role

Remove a role from your team

## Usage

```bash
vastai remove team-role NAME
```

## Arguments

**Property (type: string; required)**

name of the role

## Examples

```bash
vastai remove team-role <NAME>
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

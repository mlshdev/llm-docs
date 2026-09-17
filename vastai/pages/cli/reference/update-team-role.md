> Pinned source for Vast.ai main: [cli/reference/update-team-role.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/update-team-role.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/update-team-role

# vastai update team-role

Update an existing team role

## Usage

```bash
vastai update team-role ID --name NAME --permissions PERMISSIONS
```

## Arguments

**Property (type: integer; required)**

id of the role

## Options

**Property (type: string)**

name of the template

**Property (type: string)**

file path for json encoded permissions, look in the docs for more information

## Examples

```bash
vastai update team-role <ID>
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

> Pinned source for Vast.ai main: [cli/reference/create-team-role.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/create-team-role.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/create-team-role

# vastai create team-role

Add a new role to your team

## Usage

```bash
vastai create team-role --name NAME --permissions PERMISSIONS
```

## Options

**Property (type: string)**

name of the role

**Property (type: string)**

file path for json encoded permissions, look in the docs for more information

## Description

Creating a new team role involves understanding how permissions must be sent via json format.
You can find more information about permissions here: <https://vast.ai/docs/cli/roles-and-permissions>

## Examples

```bash
vastai create team-role
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

> Pinned source for Vast.ai main: [cli/reference/create-api-key.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/create-api-key.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/create-api-key

# vastai create api-key

Create a new api-key with restricted permissions. Can be sent to other users and teammates

## Usage

```bash
vastai create api-key --name NAME --permission_file PERMISSIONS
```

## Options

**Property (type: string)**

name of the api-key

**Property (type: string)**

file path for json encoded permissions, see <https://vast.ai/docs/cli/roles-and-permissions> for more information

**Property (type: string)**

optional wildcard key params for advanced keys

## Description

In order to create api keys you must understand how permissions must be sent via json format.
You can find more information about permissions here: <https://vast.ai/docs/cli/roles-and-permissions>

## Examples

```bash
vastai create api-key
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

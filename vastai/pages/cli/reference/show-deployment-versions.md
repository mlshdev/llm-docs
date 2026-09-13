> Commit-pinned source for Vast.ai main: [cli/reference/show-deployment-versions.mdx](https://docs.vast.ai/cli/reference/show-deployment-versions)

# vastai show deployment-versions

Display versions for a deployment

## Usage

```bash
vastai show deployment-versions ID
```

## Arguments

**Property (type: integer; required)**

id of deployment to show versions for

## Description

Example: vastai show deployment-versions 1234

## Examples

```bash
vastai show deployment-versions <ID>
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

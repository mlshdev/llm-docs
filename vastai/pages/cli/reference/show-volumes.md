> Pinned source for Vast.ai main: [cli/reference/show-volumes.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/show-volumes.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-volumes

# vastai show volumes

Show stats on owned volumes.

## Usage

```bash
vastai show volumes [OPTIONS]
```

## Options

**Property (type: string)**

volume type to display. Default to all. Possible values are "local", "all", "network" (alias: `--type`)

## Description

Show stats on owned volumes

## Examples

```bash
vastai show volumes
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

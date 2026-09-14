> Pinned source for Vast.ai main: [cli/reference/clone-volume.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/clone-volume.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/clone-volume

# vastai clone volume

Clone an existing volume

## Usage

```bash
vastai clone volume <source_id> <dest_id> [options]
```

## Arguments

**Property (type: integer; required)**

id of volume contract being cloned

**Property (type: integer; required)**

id of volume offer volume is being copied to

## Options

**Property (type: number)**

Size of new volume contract, in GB. Must be greater than or equal to the source volume, and less than or equal to the destination offer. (alias: `--size`)

**Property (type: boolean)**

Do not compress volume data before copying. (alias: `--disable_compression`)

## Description

Create a new volume with the given offer, by copying the existing volume.
Size defaults to the size of the existing volume, but can be increased if there is available space.

## Examples

```bash
vastai clone volume <SOURCE> <DEST>
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

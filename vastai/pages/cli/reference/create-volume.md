> Pinned source for Vast.ai main: [cli/reference/create-volume.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/create-volume.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/create-volume

# vastai create volume

Create a new volume

## Usage

```bash
vastai create volume ID [options]
```

## Arguments

**Property (type: integer; required)**

id of volume offer

## Options

**Property (type: number)**

size in GB of volume. Default 15 GB. (alias: `--size`)

**Property (type: string)**

Optional name of volume. (alias: `--name`)

## Description

Creates a volume from an offer ID (which is returned from "search volumes"). Each offer ID can be used to create multiple volumes,
provided the size of all volumes does not exceed the size of the offer.

## Examples

```bash
vastai create volume <ID>
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

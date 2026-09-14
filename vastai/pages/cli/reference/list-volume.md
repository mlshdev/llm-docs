> Commit-pinned source for Vast.ai main: [cli/reference/list-volume.mdx](https://docs.vast.ai/cli/reference/list-volume)

# vastai list volume

Host command

list disk space for rent as a volume on a machine

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai list volume ID [options]
```

## Arguments

**Property (type: integer; required)**

id of machine to list

## Options

**Property (type: number)**

storage price in $/GB/month, default: $0.1/GB/month (alias: `--price_disk`)

**Property (type: string)**

contract offer expiration - the available until date (optional, in unix float timestamp or MM/DD/YYYY format), default 3 months (alias: `--end_date`)

**Property (type: string)**

size of disk space allocated to offer in GB, default 15 GB (alias: `--size`)

## Description

Allocates a section of disk on a machine to be used for volumes.

## Examples

```bash
vastai list volume <ID>
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

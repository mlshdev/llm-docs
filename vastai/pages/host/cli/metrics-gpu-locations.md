> Pinned source for Vast.ai main: [host/cli/metrics-gpu-locations.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/host/cli/metrics-gpu-locations.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/metrics-gpu-locations

# vastai metrics gpu-locations

Host command

Show geographic distribution of GPUs on the marketplace

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai metrics gpu-locations [OPTIONS]
```

## Options

**Property (type: string)**

Filter by verification status (`true`, `false`, or `all`). Defaults to `all`.

**Property (type: string)**

Filter by datacenter hosting type (`true`, `false`, or `all`). Defaults to `all`.

**Property (type: string)**

Comma-separated GPU names to filter by (e.g. `"RTX 4090, H100_SXM"`)

**Property (type: string)**

Filter by rental status (`true`, `false`, or `all`). Defaults to `all`.

## Description

Returns the geographic distribution of GPUs across the Vast marketplace. Filtering is applied locally after fetching the dataset, so filter combinations do not affect server performance.

## Examples

```bash
# All locations, unfiltered
vastai metrics gpu-locations

# Datacenter-verified only
vastai metrics gpu-locations --verified true --datacenter true

# Specific GPU types
vastai metrics gpu-locations --gpu "RTX 4090, H100_SXM"

# Only unrented GPUs
vastai metrics gpu-locations --rented false

# JSON output
vastai metrics gpu-locations --raw
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

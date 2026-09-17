> Pinned source for Vast.ai main: [cli/reference/metrics-gpu-trends.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/metrics-gpu-trends.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/metrics-gpu-trends

# vastai metrics gpu-trends

Host command

Show historical GPU market trends (supply, demand, pricing over time)

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai metrics gpu-trends [GPU_NAMES] [OPTIONS]
```

## Arguments

**Property (type: string)**

Comma-separated GPU names to query (e.g. `"RTX 4090"`, `"RTX 4090, H100_SXM"`). Use `all` for all GPU types. Defaults to RTX 5090, 4090, and 3090. Underscores are accepted in place of spaces.

## Options

**Property (type: string)**

Filter by verification status (`true`, `false`, or `all`). Defaults to `all`.

**Property (type: string)**

Filter by datacenter hosting type (`true`, `false`, or `all`). Defaults to `all`.

**Property (type: boolean)**

Return all data points instead of a sampled subset (\~20 points)

**Property (type: integer)**

Unix timestamp for range start

**Property (type: integer)**

Unix timestamp for range end

**Property (type: integer)**

Seconds between data points (e.g. `3600` for hourly)

## Description

Returns time-series data for GPU supply, demand, and pricing. By default, queries the last 24 hours for RTX 5090, 4090, and 3090 and returns a sampled set of roughly 20 data points. Use `--full` to get all available data points, or `--start`/`--end`/`--step` for custom time ranges.

## Examples

```bash
# Defaults (RTX 5090, 4090, 3090 over last 24h)
vastai metrics gpu-trends

# Single GPU
vastai metrics gpu-trends "RTX 4090"

# Multiple GPUs
vastai metrics gpu-trends "RTX 4090, H100_SXM"

# All GPU types
vastai metrics gpu-trends all

# All data points (not sampled)
vastai metrics gpu-trends "RTX 4090" --full

# JSON output
vastai metrics gpu-trends "RTX 4090" --raw

# Verified datacenter GPUs only
vastai metrics gpu-trends all --verified true --datacenter true

# Custom time range with hourly resolution
vastai metrics gpu-trends "RTX 4090" --start 1773298800 --end 1773817200 --step 3600
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

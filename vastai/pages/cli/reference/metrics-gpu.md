> Pinned source for Vast.ai main: [cli/reference/metrics-gpu.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/metrics-gpu.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/metrics-gpu

# vastai metrics gpu

Host command

Show current GPU market metrics (supply, demand, pricing)

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai metrics gpu [OPTIONS]
```

## Options

**Property (type: string)**

Filter by verification status (`true`, `false`, or `all`). Defaults to `all`.

**Property (type: string)**

Filter by datacenter hosting type (`true`, `false`, or `all`). Defaults to `all`.

## Description

Returns a current snapshot of supply, demand, and pricing across all GPU types on the Vast marketplace. Use filters to narrow results to verified or datacenter machines.

## Examples

```bash
# All GPU types
vastai metrics gpu

# Verified datacenter GPUs only
vastai metrics gpu --verified true --datacenter true

# JSON output
vastai metrics gpu --raw
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

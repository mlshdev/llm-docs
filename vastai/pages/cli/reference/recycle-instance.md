> Pinned source for Vast.ai main: [cli/reference/recycle-instance.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/recycle-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/recycle-instance

# vastai recycle instance

Recycle (destroy/create) an instance

## Usage

```bash
vastai recycle instance ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

id of instance to recycle

## Description

Destroys and recreates container in place (from newly pulled image) without any risk of losing GPU priority.

## Examples

```bash
vastai recycle instance <ID>
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

> Pinned source for Vast.ai main: [cli/reference/get-wrkgrp-logs.mdx](https://github.com/vast-ai/docs/blob/2b2d9a04e7cb542f3305c0c148c2395b0cfab86e/cli/reference/get-wrkgrp-logs.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/get-wrkgrp-logs

# vastai get wrkgrp-logs

Fetch logs for a specific serverless worker group group

## Usage

```bash
vastai get wrkgrp-logs ID [--api-key API_KEY]
```

## Arguments

**Property (type: integer; required)**

id of endpoint group to fetch logs from

## Options

**Property (type: integer)**

log detail level (0 to 3)

**Property (type: integer)**

## Description

Example: vastai get endpt-logs 382

## Examples

```bash
vastai get wrkgrp-logs <ID>
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

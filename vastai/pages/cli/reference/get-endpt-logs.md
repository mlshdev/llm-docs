> Pinned source for Vast.ai main: [cli/reference/get-endpt-logs.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/get-endpt-logs.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/get-endpt-logs

# vastai get endpt-logs

Fetch logs for a specific serverless endpoint group

## Usage

```bash
vastai get endpt-logs ID [--api-key API_KEY]
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
vastai get endpt-logs <ID>
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

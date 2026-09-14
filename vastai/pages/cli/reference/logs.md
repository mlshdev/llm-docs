> Pinned source for Vast.ai main: [cli/reference/logs.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/logs.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/logs

# vastai logs

Get the logs for an instance

## Usage

```bash
vastai logs INSTANCE_ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

id of instance

## Options

**Property (type: string)**

Number of lines to show from the end of the logs (default '1000')

**Property (type: string)**

Grep filter for log entries

**Property (type: boolean)**

Fetch daemon system logs instead of container logs

## Examples

```bash
vastai logs <INSTANCE_ID>
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

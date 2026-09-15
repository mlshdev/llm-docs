> Pinned source for Vast.ai main: [cli/reference/update-workers.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/update-workers.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/update-workers

# vastai update workers

Trigger a rolling update of all workers in a workergroup, or cancel an in-progress update

## Usage

```bash
vastai update workers WORKERGROUP_ID [--cancel]
```

## Arguments

**Property (type: integer; required)**

id of workergroup to update workers for

## Options

**Property (type: boolean)**

cancel an in-progress update for the workergroup

## Description

Starts a rolling update of all workers in the specified workergroup. The autoscaler
will cycle through workers, updating them while maintaining capacity.

Use `--cancel` to cancel an update that is currently in progress.

## Examples

```bash
vastai update workers 4242
vastai update workers 4242 --cancel
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

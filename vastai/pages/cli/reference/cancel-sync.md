> Pinned source for Vast.ai main: [cli/reference/cancel-sync.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/cancel-sync.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/cancel-sync

# vastai cancel sync

Cancel a remote copy in progress, specified by DST id

## Usage

```bash
vastai cancel sync DST
```

## Arguments

**Property (type: string; required)**

instance\_id:/path to target of sync operation

## Description

Use this command to cancel any/all current remote cloud sync operations copying to a specific named instance, given by DST.

## Examples

```bash
vast cancel sync 12371

The first example cancels all copy operations currently copying data into instance 12371
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

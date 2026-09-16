> Pinned source for Vast.ai main: [cli/reference/cancel-maint.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/cancel-maint.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/cancel-maint

# vastai cancel maint

Host command

Cancel maint window

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai cancel maint id
```

## Arguments

**Property (type: integer; required)**

id of machine to cancel maintenance(s) for

## Description

For deleting a machine's scheduled maintenance window(s), use this cancel maint command.
Example: vastai cancel maint 8207

## Examples

```bash
vastai cancel maint <ID>
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

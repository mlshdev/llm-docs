> Pinned source for Vast.ai main: [cli/reference/unlist-volume.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/unlist-volume.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/unlist-volume

# vastai unlist volume

Host command

unlist volume offer

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai unlist volume ID
```

## Arguments

**Property (type: integer; required)**

volume ID you want to unlist

## Examples

```bash
vastai unlist volume <ID>
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

> Pinned source for Vast.ai main: [host/cli/defrag-machines.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/host/cli/defrag-machines.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/defrag-machines

# vastai defrag machines

Host command

Defragment machines

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai defragment machines IDs
```

## Arguments

**Property (type: integer; required)**

ids of machines

## Description

Defragment some of your machines. This will rearrange GPU assignments to try and make more multi-gpu offers available.

## Examples

```bash
vastai defrag machines <IDS>
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

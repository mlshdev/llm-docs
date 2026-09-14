> Pinned source for Vast.ai main: [host/cli/set-min-bid.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/host/cli/set-min-bid.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/set-min-bid

# vastai set min-bid

Host command

Set the minimum bid/rental price for a machine

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai set min_bid id [--price PRICE]
```

## Arguments

**Property (type: integer; required)**

id of machine to set min bid price for

## Options

**Property (type: number)**

per gpu min bid price in $/hour

## Description

Change the current min bid price of machine id to PRICE.

## Examples

```bash
vastai set min-bid <ID>
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

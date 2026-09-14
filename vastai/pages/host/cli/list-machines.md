> Pinned source for Vast.ai main: [host/cli/list-machines.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/host/cli/list-machines.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/list-machines

# vastai list machines

Host command

list machines for rent

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai list machines IDs [options]
```

## Arguments

**Property (type: integer; required)**

ids of instance to list

## Options

**Property (type: number)**

per gpu on-demand rental price in $/hour (base price for active instances) (alias: `--price_gpu`)

**Property (type: number)**

storage price in $/GB/month (price for inactive instances), default: $0.10/GB/month (alias: `--price_disk`)

**Property (type: number)**

price for internet upload bandwidth in $/GB (alias: `--price_inetu`)

**Property (type: number)**

price for internet download bandwidth in $/GB (alias: `--price_inetd`)

**Property (type: number)**

per gpu minimum bid price floor in $/hour (alias: `--price_min_bid`)

**Property (type: number)**

Max long term prepay discount rate fraction, default: 0.4  (alias: `--discount_rate`)

**Property (type: integer)**

minimum amount of gpus (alias: `--min_chunk`)

**Property (type: string)**

contract offer expiration - the available until date (optional, in unix float timestamp or MM/DD/YYYY format) (alias: `--end_date`)

**Property (type: string)**

Updates end\_date daily to be duration from current date. Cannot be combined with end\_date. Format is: `n days`, `n weeks`, `n months`, `n years`, or total intended duration in seconds. (alias: `--duration`)

**Property (type: integer)**

Size for volume contract offer. Defaults to half of available disk. Set 0 to not create a volume contract offer. (alias: `--vol_size`)

**Property (type: number)**

Price for disk on volume contract offer. Defaults to price\_disk. Invalid if vol\_size is 0. (alias: `--vol_price`)

## Description

This variant can be used to list or update the listings for multiple machines at once with the same args.
You could extend the end dates of all your machines using a command combo like this:
vastai list machines $(vastai show machines -q) -e 12/31/2024 `--retry` 6

## Examples

```bash
vastai list machines <IDS>
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

> Pinned source for Vast.ai main: [host/cli/list-machine.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/host/cli/list-machine.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/list-machine

# vastai list machine

Host command

list a machine for rent

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai list machine ID [options]
```

## Arguments

**Property (type: integer; required)**

id of machine to list

## Options

**Property (type: number)**

per gpu rental price in $/hour  (price for active instances) (alias: `--price_gpu`)

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

Performs the same action as pressing the "LIST" button on the site <https://cloud.vast.ai/host/machines>.
On the end date the listing will expire and your machine will unlist. However any existing client jobs will still remain until ended by their owners.
Once you list your machine and it is rented, it is extremely important that you don't interfere with the machine in any way.
If your machine has an active client job and then goes offline, crashes, or has performance problems, this could permanently lower your reliability rating.
We strongly recommend you test the machine first and only list when ready.

## Examples

```bash
vastai list machine <ID>
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

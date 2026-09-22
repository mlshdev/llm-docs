> Pinned source for Vast.ai main: [cli/reference/change-bid.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/change-bid.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/change-bid

# vastai change bid

Change the bid price for a spot/interruptible instance

## Usage

```bash
vastai change bid id [--price PRICE]
```

## Arguments

**Property (type: integer; required)**

id of instance type to change bid

## Options

**Property (type: number)**

per machine bid price in $/hour

**Property (type: string)**

try to schedule a command to run hourly, daily, or monthly. Valid values are HOURLY, DAILY, WEEKLY  For ex. `--schedule` DAILY Choices: `HOURLY`, `DAILY`, `WEEKLY`

**Property (type: string)**

Start date/time in format 'YYYY-MM-DD HH:MM:SS PM' (UTC). Default is now. (optional)

**Property (type: string)**

End date/time in format 'YYYY-MM-DD HH:MM:SS PM' (UTC). Default is 7 days from now. (optional)

**Property (type: integer)**

Day of week you want scheduled job to run on (0-6, where 0=Sunday) or "\*". Default will be 0. For ex. `--day` 0

**Property (type: integer)**

Hour of day you want scheduled job to run on (0-23) or "\*" (UTC). Default will be 0. For ex. `--hour` 16

## Description

Change the current bid price of instance id to PRICE.
If PRICE is not specified, then a winning bid price is used as the default.

## Examples

```bash
vastai change bid <ID>
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

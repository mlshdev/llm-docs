> Pinned source for Vast.ai main: [cli/reference/schedule-maint.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/schedule-maint.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/schedule-maint

# vastai schedule maint

Host command

Schedule upcoming maint window

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai schedule maintenance id [--sdate START_DATE --duration DURATION --maintenance_category MAINTENANCE_CATEGORY]
```

## Arguments

**Property (type: integer; required)**

id of machine to schedule maintenance for

## Options

**Property (type: number)**

maintenance start date in unix epoch time (UTC seconds)

**Property (type: number)**

maintenance duration in hours

**Property (type: string)**

(optional) can be one of \[power, internet, disk, gpu, software, other]

## Description

The proper way to perform maintenance on your machine is to wait until all active contracts have expired or the machine is vacant.
For unplanned or unscheduled maintenance, use this schedule maint command. That will notify the client that you have to take the machine down and that they should save their work.
You can specify a date, duration, reason and category for the maintenance.

Example: vastai schedule maint 8207 `--sdate` 1677562671 `--duration` 0.5 `--maintenance_category` "power"

## Examples

```bash
vastai schedule maint <ID>
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

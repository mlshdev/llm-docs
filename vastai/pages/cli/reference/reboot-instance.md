> Pinned source for Vast.ai main: [cli/reference/reboot-instance.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/reboot-instance.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/reboot-instance

# vastai reboot instance

Reboot (stop/start) an instance

## Usage

```bash
vastai reboot instance ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

id of instance to reboot

## Options

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

Stops and starts container without any risk of losing GPU priority.

## Examples

```bash
vastai reboot instance <ID>
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

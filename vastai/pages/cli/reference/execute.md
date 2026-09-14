> Pinned source for Vast.ai main: [cli/reference/execute.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/execute.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/execute

# vastai execute

Execute a (constrained) remote command on a machine

## Usage

```bash
vastai execute id COMMAND
```

## Arguments

**Property (type: integer; required)**

id of instance to execute on

**Property (type: string; required)**

bash command surrounded by single quotes

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

Available commands:

| Command | Description                               |
| ------- | ----------------------------------------- |
| `ls`    | List directory contents                   |
| `rm`    | Remove files or directories               |
| `du`    | Summarize device usage for a set of files |

Returns the output of the command executed on the instance. May take a few seconds to retrieve results.

## Examples

```bash
vastai execute 99999 'ls -l -o -r'
vastai execute 99999 'rm -r home/delete_this.txt'
vastai execute 99999 'du -d2 -h'
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

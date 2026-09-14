> Commit-pinned source for Vast.ai main: [cli/reference/show-machine.mdx](https://docs.vast.ai/cli/reference/show-machine)

# vastai show machine

Host command

Show hosted machines

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai show machine ID [OPTIONS]
```

## Arguments

**Property (type: integer; required)**

id of machine to display

## Options

**Property (type: boolean)**

only display numeric ids (alias: `--quiet`)

## Examples

```bash
vastai show machine <MACHINE>
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

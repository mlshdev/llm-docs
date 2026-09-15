> Pinned source for Vast.ai main: [host/cli/show-machine.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/host/cli/show-machine.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/show-machine

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

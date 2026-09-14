> Pinned source for Vast.ai main: [host/cli/show-machines.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/host/cli/show-machines.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/show-machines

# vastai show machines

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
vastai show machines [OPTIONS]
```

## Options

**Property (type: boolean)**

only display numeric ids (alias: `--quiet`)

## Examples

```bash
vastai show machines
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

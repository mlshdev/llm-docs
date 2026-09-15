> Pinned source for Vast.ai main: [host/cli/show-maints.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/host/cli/show-maints.mdx)
> Canonical documentation: https://docs.vast.ai/host/cli/show-maints

# vastai show maints

Host command

Show maintenance information for host machines

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai show maints -ids 'machine_id_1' [OPTIONS]
vastai show maints -ids 'machine_id_1, machine_id_2' [OPTIONS]
```

## Options

**Property (type: string)**

comma seperated string of machine\_ids for which to get maintenance information

**Property (type: boolean)**

only display numeric ids of the machines in maintenance (alias: `--quiet`)

## Examples

```bash
vastai show maints
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

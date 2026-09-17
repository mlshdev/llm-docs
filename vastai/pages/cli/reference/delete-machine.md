> Pinned source for Vast.ai main: [cli/reference/delete-machine.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/delete-machine.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-machine

# vastai delete machine

Host command

Delete machine if the machine is not being used by clients. host jobs on their own machines are disregarded and machine is force deleted.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai delete machine <id>
```

## Arguments

**Property (type: integer; required)**

id of machine to delete

## Examples

```bash
vastai delete machine <ID>
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

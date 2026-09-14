> Commit-pinned source for Vast.ai main: [host/cli/remove-defjob.mdx](https://docs.vast.ai/host/cli/remove-defjob)

# vastai remove defjob

Host command

Delete default jobs

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai remove defjob id
```

## Arguments

**Property (type: integer; required)**

id of machine to remove default instance from

## Examples

```bash
vastai remove defjob <ID>
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

> Pinned source for Vast.ai main: [cli/reference/cleanup-machine.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/cli/reference/cleanup-machine.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/cleanup-machine

# vastai cleanup machine

Host command

Remove all expired storage instances from the machine, freeing up space

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;command, used for managing machines you are renting out on Vast.ai.

## Usage

```bash
vastai cleanup machine ID [options]
```

## Arguments

**Property (type: integer; required)**

id of machine to cleanup

## Description

Instances expire on their end date. Expired instances still pay storage fees, but can not start.
Since hosts are still paid storage fees for expired instances, we do not auto delete them.
Instead you can use this CLI/API function to delete all expired storage instances for a machine.
This is useful if you are running low on storage, want to do maintenance, or are subsidizing storage, etc.

## Examples

```bash
vastai cleanup machine <ID>
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

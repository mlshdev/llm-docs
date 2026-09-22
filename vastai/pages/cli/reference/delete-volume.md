> Pinned source for Vast.ai main: [cli/reference/delete-volume.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/delete-volume.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-volume

# vastai delete volume

Delete a volume

## Usage

```bash
vastai delete volume ID
```

## Arguments

**Property (type: integer; required)**

id of volume contract

## Description

Deletes volume with the given ID. All instances using the volume must be destroyed before the volume can be deleted.

## Examples

```bash
vastai delete volume <ID>
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

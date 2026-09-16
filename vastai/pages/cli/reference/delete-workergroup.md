> Pinned source for Vast.ai main: [cli/reference/delete-workergroup.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/cli/reference/delete-workergroup.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-workergroup

# vastai delete workergroup

Delete a workergroup group

## Usage

```bash
vastai delete workergroup ID
```

## Arguments

**Property (type: integer; required)**

id of group to delete

## Description

Note that deleting a workergroup doesn't automatically destroy all the instances that are associated with your workergroup.
Example: vastai delete workergroup 4242

## Examples

```bash
vastai delete workergroup <ID>
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

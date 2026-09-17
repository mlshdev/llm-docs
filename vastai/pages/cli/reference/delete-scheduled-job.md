> Pinned source for Vast.ai main: [cli/reference/delete-scheduled-job.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/cli/reference/delete-scheduled-job.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/delete-scheduled-job

# vastai delete scheduled-job

Delete a scheduled job

## Usage

```bash
vastai delete scheduled-job ID
```

## Arguments

**Property (type: integer; required)**

id of scheduled job to remove

## Examples

```bash
vastai delete scheduled-job <ID>
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

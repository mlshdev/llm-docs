> Commit-pinned source for Vast.ai main: [cli/reference/delete-scheduled-job.mdx](https://docs.vast.ai/cli/reference/delete-scheduled-job)

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

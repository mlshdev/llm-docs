> Pinned source for Vast.ai main: [cli/reference/show-scheduled-jobs.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/cli/reference/show-scheduled-jobs.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/show-scheduled-jobs

# vastai show scheduled-jobs

Display the list of scheduled jobs

## Usage

```bash
vastai show scheduled-jobs [--api-key API_KEY] [--raw]
```

## Examples

```bash
vastai show scheduled-jobs
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

> Commit-pinned source for Vast.ai main: [cli/reference/ssh-url.mdx](https://docs.vast.ai/cli/reference/ssh-url)

# vastai ssh-url

ssh url helper

## Usage

```bash
vastai ssh-url ID
```

## Arguments

**Property (type: integer; required)**

id of instance

## Examples

```bash
vastai ssh-url <ID>
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

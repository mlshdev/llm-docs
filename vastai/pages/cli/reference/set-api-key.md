> Commit-pinned source for Vast.ai main: [cli/reference/set-api-key.mdx](https://docs.vast.ai/cli/reference/set-api-key)

# vastai set api-key

Set api-key (get your api-key from the console/CLI)

## Usage

```bash
vastai set api-key APIKEY
```

## Arguments

**Property (type: string; required)**

Api key to set as currently logged in user

## Examples

```bash
vastai set api-key <NEW_API_KEY>
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
